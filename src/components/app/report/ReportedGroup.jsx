import { useState } from "react";
import { view } from "../../../assets/export";
import Pagination from "../../global/Pagination";
import { dateFormate } from "../../../lib/helpers";
import ReportedGroupModal from "./ReportedGroupModal";
import axios from "../../../axios";
import { MdDelete } from "react-icons/md";

const AlreadyDeleted = () => (
  <div className="bg-[#FF353520] border border-[#FF3535] text-[#FF3535] text-[11px] px-3 py-2 rounded-[8px] flex items-center gap-1 whitespace-nowrap">
    <MdDelete size={14} /> Deleted
  </div>
);

export default function ReportedGroup({ reportList, pagination, setPageNo, refetch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [groupDetail, setGroupDetail] = useState({});
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (groupID) => {
    try {
      setDeletingId(groupID);
      await axios.post(`/report/delete-group?groupID=${groupID}`);
      refetch();
    } catch (error) {
      console.log(error);
    } finally {
      setDeletingId(null);
    }
  };

  const renderDeleteBtn = (groupID, isDeleted, mobile = false) =>
    isDeleted ? (
      <AlreadyDeleted />
    ) : (
      <button
        onClick={() => handleDelete(groupID)}
        disabled={deletingId === groupID}
        className={`bg-[#FF3535] flex items-center justify-center px-4 py-2 rounded-[8px] gap-2 hover:bg-[#FF3535]/90 transition-colors disabled:opacity-50 ${mobile ? "w-full" : ""}`}
      >
        <MdDelete size={16} />
        <span className="text-[12px]">
          {deletingId === groupID ? "Deleting..." : "Delete"}
        </span>
      </button>
    );

  return (
    <div>
      <div className="bg-[#13131399] h-[67vh] table-scroller mt-3 rounded-[25px] overflow-x-auto whitespace-nowrap px-2 sm:px-5 mb-6">
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-12 text-white rounded-[15px] mb-4">
          <div className="col-span-1 py-4 text-left font-semibold text-[11px]">Name</div>
          <div className="col-span-3 py-4 text-left font-semibold text-[11px] md:pl-6 lg:pl-20">Reason</div>
          <div className="col-span-3 py-4 text-left font-semibold text-[11px] md:pl-6 lg:pl-20">Reported User</div>
          <div className="col-span-3 py-4 text-left font-semibold text-[11px]">Report Date</div>
          <div className="col-span-2 py-4 text-left font-semibold text-[11px]">Action</div>
        </div>

        {reportList?.map((item, index) => (
          <div key={index}>
            {/* Mobile View */}
            <div className="md:hidden bg-black bg-opacity-40 rounded-[15px] p-4 mb-4 text-white">
              <div className="flex items-center gap-4 mb-4">
                <img src={item?.reporter?.profilePicture} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-[14px]">{item?.reporter?.firstName}</p>
                  <p className="text-[12px] text-white/70">Reported User</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="text-[12px]">
                  <p className="text-white/70 mb-1">Reason:</p>
                  <p className="leading-relaxed text-wrap">{item?.reason}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-white/70 text-[12px]">Reported:</p>
                  <div className="flex items-center gap-2">
                    <img src={item?.reportedUser?.profilePicture} alt="Reported User" className="w-8 h-8 rounded-full" />
                    <span className="text-[12px]">{item?.reportedUser?.firstName}</span>
                  </div>
                </div>
                <div className="flex items-center text-[12px]">
                  <span className="w-24 text-white/70">Report Date:</span>
                  <span>{dateFormate(item?.createdAt)}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => { setIsOpen(!isOpen); setGroupDetail(item); }}
                  className="bg-[#2F7EF7] w-full flex items-center justify-center px-4 py-2 rounded-[8px] gap-2 hover:bg-[#2F7EF7]/90 transition-colors"
                >
                  <img src={view} alt="" className="w-4 h-4" />
                  <span className="text-[12px]">View Details</span>
                </button>
                {renderDeleteBtn(item?.group?._id, item?.group?.isDeleted, true)}
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-12 items-center transition duration-300 rounded-[15px] py-2 mb-4 text-white">
              <div className="col-span-1 flex items-center gap-3">
                <img src={item?.reporter?.profilePicture} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-[10px] lg:text-[12px] text-wrap lg:text-nowrap font-medium whitespace-normal">
                  {item?.reporter?.firstName}
                </span>
              </div>
              <div className="col-span-3 md:pl-6 lg:pl-20">
                <p className="text-[10px] lg:text-[12px] leading-relaxed whitespace-normal pr-4">{item?.reason}</p>
              </div>
              <div className="col-span-3 md:pl-6 lg:pl-20 flex items-center gap-3">
                <img src={item?.reportedUser?.profilePicture} alt="Reported User" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-[12px] whitespace-normal">{item?.reportedUser?.firstName}</span>
              </div>
              <div className="col-span-3 text-[12px]">{dateFormate(item?.createdAt)}</div>
              <div className="col-span-2 flex justify-start gap-2">
                <button
                  onClick={() => { setIsOpen(!isOpen); setGroupDetail(item); }}
                  className="bg-[#2F7EF7] flex items-center justify-center px-4 py-2 rounded-[8px] gap-2 hover:bg-[#2F7EF7]/90 transition-colors"
                >
                  <img src={view} alt="" className="w-4 h-4" />
                  <span className="text-[12px]">View</span>
                </button>
                {renderDeleteBtn(item?.group?._id, item?.group?.isDeleted)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Pagination pagnition={pagination} setPageNo={setPageNo} />
      </div>
      <ReportedGroupModal setIsOpen={setIsOpen} isOpen={isOpen} groupDetail={groupDetail} />
    </div>
  );
}
