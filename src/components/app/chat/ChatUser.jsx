import { CiSearch } from "react-icons/ci";
import { EventList } from "../../../assets/export";
import { useState } from "react";
import { users } from "../../../static/ChatUsers";

export default function ChatUser({
  searchQuery,
  setSearchQuery,
  activeChat,
  setActiveChat,
}) {
  const [tabs, setTabs] = useState("chat");

 
  return (
    <div className="h-full bg-[#13131399] backdrop-blur-[50px] rounded-[15px]  shadow-lg flex flex-col">
      <div>
        <div className="w-full">
          <div value="chats">
            <div className="relative p-4">
              <div className="absolute inset-y-0 end-0 flex items-center px-8 pointer-events-none">
                <CiSearch color="white" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full h-[50px]  px-3 text-sm text-white border border-[#F4F4F480] bg-transparent rounded-[14px] "
                placeholder="Search"
                required=""
              />
            </div>
            <div className="w-full flex justify-between">
              <button
                onClick={() => setTabs("chat")}
                className={`border-b-2 ${
                  tabs == "chat"
                    ? "font-[600] text-[16px] border-[#2F7EF7] py-2"
                    : "font-[400] text-[16px] border-[#8A92A6] py-2"
                } flex-1 text-white`}
              >
                Chats
              </button>
              <button
                onClick={() => setTabs("group")}
                className={`border-b-2 ${
                  tabs == "group"
                    ? "font-[600] text-[16px] border-[#2F7EF7] py-2"
                    : "font-[400] text-[16px] border-[#8A92A6] py-2"
                } flex-1 text-white`}
              >
                Group
              </button>
            </div>
            <div className="space-y-2">
              {users.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center p-3  cursor-pointer   ${
                    activeChat?.id === user.id ? "bg-[#2F7EF7]/10 backdrop-blur-lg" : ""
                  }`}
                  onClick={() => setActiveChat(user)}
                >
                  <div className="h-10 w-10">
                    <img
                      src={tabs=="chat"?user.avatar:EventList}
                      alt={user.name}
                      className="rounded-full border border-[#2F7EF7] p-[2px]"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-[600] text-[11px] lg:text-[14px] text-white">
                        {user.name}
                      </h4>
                      <span className="text-[10px] lg:text-[12px] text-white">{user.time}</span>
                    </div>
                    <p className="text-[10px] lg:text-[12px] text-white text-wrap font-[400] truncate">
                      {user.lastMessage}
                    </p>
                  </div>
                  {user.unread > 0 && (
                    <span className="-ml-5 mt-8 bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
                      {user.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
