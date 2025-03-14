import { person, view } from "../../../assets/export";
import Pagination from "../../global/Pagination";
import { useNavigate } from "react-router";

export default function UserList() {
  const navigate = useNavigate("");
  return (
    <div  >
     <div className="h-[67vh] mb-2 bg-[#13131399] overflow-auto table-scroller mt-3 rounded-[25px] overflow-x-auto p-4">
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-white font-semibold text-[12px] mb-4">
          <div className="col-span-2 py-3 text-left">Name</div>
          <div className="col-span-2 py-3 text-left">Email</div>
          <div className="col-span-2 py-3 text-left">Contact No.</div>
          <div className="col-span-2 py-3 text-left">User Name</div>
          <div className="col-span-2 py-3 text-left">Registration Date</div>
          <div className="col-span-2 py-3 text-left">Action</div>
        </div>

        {/* User Rows */}
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index}>
            {/* Mobile View */}
            <div className="md:hidden  bg-opacity-40 rounded-[15px] p-4 mb-4">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={person}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-[14px] text-white">
                    mike smith
                  </p>
                  <p className="text-[12px] text-white/70">@mikesmith</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-[12px] text-white">
                  <span className="w-24 opacity-70">Email:</span>
                  <span>mikesmith12@gmail.com</span>
                </div>
                <div className="flex items-center text-[12px] text-white">
                  <span className="w-24 opacity-70">Contact:</span>
                  <span>(619) 602-6578 x6033</span>
                </div>
                <div className="flex items-center text-[12px] text-white">
                  <span className="w-24 opacity-70">Registered:</span>
                  <span>11/22/44</span>
                </div>
              </div>

              <button
                onClick={() => navigate("/user/1")}
                className="bg-[#2F7EF7] flex items-center justify-center w-full text-white px-4 py-2 rounded-[8px] text-[12px] gap-2"
              >
                <img src={view} alt="" className="w-5 h-5" /> View
              </button>
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-12 gap-4 items-center border-b border-[#313131]   py-2 mb-4 text-white text-[12px]">
              <div className="col-span-2 flex items-center justify-start gap-3">
                <img
                  src={person}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-wrap lg:text-nowrap" >Mike smith</span>
              </div>
              <div className="col-span-2 text-left break-words text-wrap">
                mikesmith12@gmail.com
              </div>
              <div className="col-span-2 text-left break-words">(619) 602-6578 x6033</div>
              <div className="col-span-2 text-left break-words">@mikesmith</div>
              <div className="col-span-2 text-left break-words">11/22/44</div>
              <div className="col-span-2 flex justify-start">
                <button
                  onClick={() => navigate("/user/1")}
                  className="bg-[#2F7EF7] flex items-center justify-center px-4 py-2 rounded-[8px] gap-2"
                >
                  <img src={view} alt="" className="w-5 h-5" /> View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
}
