import { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { BsCheckAll, BsCheck } from "react-icons/bs";
import { defaultImage } from "../../../assets/export";
import axios from "../../../axios";

// ── helpers ───────────────────────────────────────────────────────────────────
function formatTime(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (d.toDateString() === today.toDateString()) return "Today";
  if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
  return d.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
function groupByDate(messages) {
  const groups = {};
  [...messages].reverse().forEach((msg) => {
    const key = formatDate(msg.createdAt);
    if (!groups[key]) groups[key] = [];
    groups[key].push(msg);
  });
  return groups;
}

// ── PostCard ──────────────────────────────────────────────────────────────────
function PostCard({ data }) {
  if (!data) return null;
  return (
    <div className="mt-2 rounded-[12px] overflow-hidden border border-white/10 bg-white/5 max-w-[260px]">
      {data.media?.[0]?.file && (
        <img
          src={data.media[0].file}
          alt="Post"
          className="w-full h-36 object-cover"
        />
      )}
      <div className="p-2">
        {data.event && (
          <div className="flex items-center gap-2 mb-1">
            <img
              src={data.event.coverPhoto}
              alt=""
              className="w-6 h-6 rounded object-cover"
            />
            <span className="text-[11px] text-[#2F7EF7] font-semibold truncate">
              {data.event.title}
            </span>
          </div>
        )}
        <p className="text-[12px] text-white/80 leading-relaxed line-clamp-2">
          {data.text}
        </p>
        <div className="flex gap-3 mt-1 text-[10px] text-white/40">
          <span>❤ {data.likeCount}</span>
          <span>💬 {data.commentCount}</span>
          <span>↗ {data.shareCount}</span>
        </div>
      </div>
    </div>
  );
}

// ── MessageBubble ─────────────────────────────────────────────────────────────
function MessageBubble({ msg, isSelf, reportedUserId }) {
  const isReported = msg.sender._id === reportedUserId;
  return (
    <div
      className={`flex items-end gap-2 mb-3 ${isSelf ? "flex-row-reverse" : "flex-row"}`}
    >
      <img
        src={msg.sender.profilePicture || defaultImage}
        alt=""
        className="w-7 h-7 rounded-full object-cover flex-shrink-0 mb-1"
      />
      <div
        className={`flex flex-col max-w-[70%] ${isSelf ? "items-end" : "items-start"}`}
      >
        <span
          className={`text-[10px] mb-1 font-medium ${isReported ? "text-red-400" : "text-[#2F7EF7]"}`}
        >
          {msg.sender.firstName} {msg.sender.lastName}
          {isReported && (
            <span className="ml-1 px-1 py-0.5 bg-red-500/20 text-red-400 rounded text-[9px]">
              Reported
            </span>
          )}
        </span>
        <div
          className={`px-3 py-2 rounded-[14px] text-[13px] leading-relaxed
            ${
              isSelf
                ? "bg-[#2F7EF7] text-white rounded-br-[4px]"
                : isReported
                  ? "bg-red-500/15 border border-red-500/30 text-white rounded-bl-[4px]"
                  : "bg-white/10 text-white rounded-bl-[4px]"
            }`}
        >
          {msg.type === "post" ? (
            <PostCard data={msg.data} />
          ) : msg.type === "file" ? (
            <img src={msg.content} className="w-[100px] h-[100px] rounded-lg" alt="" />
          ) : (
            msg.content
          )}
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[10px] text-white/30">
            {formatTime(msg.createdAt)}
          </span>
          {isSelf &&
            (msg.readBy?.length > 1 ? (
              <BsCheckAll className="text-[#2F7EF7] text-[11px]" />
            ) : (
              <BsCheck className="text-white/40 text-[11px]" />
            ))}
        </div>
      </div>
    </div>
  );
}

// ── ChatHistoryModal ──────────────────────────────────────────────────────────
export default function ChatHistoryModal({ isOpen, setIsOpen, chatDetail }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const bottomRef = useRef(null);

  const chatroomID = chatDetail?.chat?._id;
  const reportedUserId = chatDetail?.reportedUser?._id;
  const selfId = chatDetail?.reporter?._id;

  useEffect(() => {
    if (!isOpen || !chatroomID) return;
    setMessages([]);
    setPage(1);
    setPagination(null);
    fetchMessages(1);
  }, [isOpen, chatroomID]);

  useEffect(() => {
    if (messages.length && page === 1) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  async function fetchMessages(p = 1) {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `report/get-messages?chatroomID=${chatroomID}&page=${p}&limit=20`,
      );

      console.log("chat messages raw res:", res);

      // axios interceptors sometimes unwrap the body directly (res.success exists),
      // other times it stays nested under res.data — handle both:
      const payload = res?.success !== undefined ? res : res?.data;

      if (payload?.success) {
        const incoming = payload.data?.messages ?? [];
        setMessages((prev) => (p === 1 ? incoming : [...incoming, ...prev]));
        setPagination(payload.pagination);
        setPage(p);
      } else {
        console.error("API non-success payload:", payload);
        setError("Failed to load messages.");
      }
    } catch (err) {
      console.error("fetchMessages error:", err);
      setError("Network error while fetching messages.");
    } finally {
      setLoading(false);
    }
  }

  const grouped = groupByDate(messages);

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Chat History"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={() => setIsOpen(false)}
      className="flex items-center justify-center border-none outline-none z-[1100]"
      overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1100] flex justify-center items-center"
    >
      <div className="bg-[#18181b] w-[600px] max-w-[96vw] h-[80vh] flex flex-col rounded-[20px] shadow-2xl border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#1f1f23]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2F7EF7]/20 flex items-center justify-center">
              <FiMessageSquare className="text-[#2F7EF7] text-[16px]" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-[15px] leading-tight">
                {chatDetail?.chat?.groupName || "Chat History"}
              </h3>
              <p className="text-[11px] text-white/40">
                {chatDetail?.type} · {pagination?.totalItems ?? "–"} messages
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mr-4">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1">
              <img
                src={chatDetail?.reporter?.profilePicture || defaultImage}
                className="w-5 h-5 rounded-full object-cover"
                alt=""
              />
              <span className="text-[11px] text-[#2F7EF7]">
                {chatDetail?.reporter?.firstName}
              </span>
              <span className="text-white/20 mx-1">·</span>
              <img
                src={chatDetail?.reportedUser?.profilePicture || defaultImage}
                className="w-5 h-5 rounded-full object-cover ring-1 ring-red-400/50"
                alt=""
              />
              <span className="text-[11px] text-red-400">
                {chatDetail?.reportedUser?.firstName}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white/50 hover:text-white transition"
          >
            <IoMdClose className="text-[22px]" />
          </button>
        </div>

        {/* Report Banner */}
        {chatDetail?.reason && (
          <div className="mx-4 mt-3 px-4 py-2 rounded-[10px] bg-red-500/10 border border-red-500/20 flex items-start gap-2">
            <span className="text-red-400 text-[11px] font-semibold uppercase tracking-wide mt-0.5">
              Report Reason:
            </span>
            <span className="text-red-300 text-[12px] leading-relaxed">
              {chatDetail.reason}
            </span>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 custom-scrollbar">
          {pagination && page < pagination.totalPages && (
            <div className="flex justify-center mb-4">
              <button
                onClick={() => fetchMessages(page + 1)}
                disabled={loading}
                className="text-[12px] text-[#2F7EF7] hover:underline disabled:opacity-50"
              >
                {loading ? "Loading…" : "Load earlier messages"}
              </button>
            </div>
          )}

          {loading && messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <div className="w-8 h-8 border-2 border-[#2F7EF7] border-t-transparent rounded-full animate-spin" />
              <p className="text-white/40 text-[13px]">Loading messages…</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center h-full gap-2">
              <p className="text-red-400 text-[13px]">{error}</p>
              <button
                onClick={() => fetchMessages(1)}
                className="text-[12px] text-[#2F7EF7] hover:underline"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-2 text-white/30">
              <FiMessageSquare className="text-4xl" />
              <p className="text-[13px]">No messages found</p>
            </div>
          )}

          {Object.entries(grouped).map(([date, msgs]) => (
            <div key={date}>
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[11px] text-white/30 bg-[#18181b] px-2">
                  {date}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              {msgs.map((msg) => (
                <MessageBubble
                  key={msg._id}
                  msg={msg}
                  isSelf={msg.sender._id === selfId}
                  reportedUserId={reportedUserId}
                />
              ))}
            </div>
          ))}

          <div ref={bottomRef} />
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#1f1f23] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-white/30">
            <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
            <span className="text-red-400/70">
              {chatDetail?.reportedUser?.firstName}
            </span>
            <span>= reported user</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-white/30">
            <span>
              Page {page} of {pagination?.totalPages ?? 1}
            </span>
            <span>·</span>
            <span>{pagination?.totalItems ?? messages.length} total</span>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }
      `}</style>
    </Modal>
  );
}
