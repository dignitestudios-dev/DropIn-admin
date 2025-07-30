import { useState } from "react";
import { person, view } from "../../../assets/export";
import Pagination from "../../global/Pagination";
import ReportedUserModal from "./ReportedUserModal";

export default function ReportedUsers({reportList}) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(reportList,"reportList")
  return (
    <div>
      <div className="bg-[#13131399] h-[67vh] table-scroller mt-3 rounded-[25px] overflow-x-auto whitespace-nowrap px-2 sm:px-5 mb-6">
        {/* Header Row - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-12 text-white rounded-[15px] mb-4">
          <div className="col-span-1 py-4 text-left font-semibold text-[11px]">
            Name
          </div>
          <div className="col-span-3 py-4 text-left font-semibold text-[11px] md:pl-6 lg:pl-20">
            Reason
          </div>
          <div className="col-span-3 py-4 text-left font-semibold text-[11px] md:pl-6 lg:pl-20">
            Reported User
          </div>
          <div className="col-span-3 py-4 text-left font-semibold text-[11px]">
            Report Date
          </div>
          <div className="col-span-2 py-4 text-left font-semibold text-[11px]">
            Action
          </div>
        </div>

        {/* Report Rows */}
        {reportList?.map((index) => (
          <div key={index}>
            {/* Mobile View */}
            <div className="md:hidden bg-black bg-opacity-40 rounded-[15px] p-4 mb-4 text-white">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={person}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-[14px]">mike smith</p>
                  <p className="text-[12px] text-white/70">Reported User</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="text-[12px]">
                  <p className="text-white/70 mb-1">Reason:</p>
                  <p className="leading-relaxed text-wrap">
                    Lorem ipsum dolor sit amet consectetur. Donec mattis
                    vestibulum.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-white/70 text-[12px]">Reported:</p>
                  <div className="flex items-center gap-2">
                    <img
                      src={person}
                      alt="Reported User"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-[12px]">Mike Smith</span>
                  </div>
                </div>

                <div className="flex items-center text-[12px]">
                  <span className="w-24 text-white/70">Report Date:</span>
                  <span>11/22/44</span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#2F7EF7] w-full flex items-center justify-center px-4 py-2 rounded-[8px] gap-2 hover:bg-[#2F7EF7]/90 transition-colors"
              >
                <img src={view} alt="" className="w-4 h-4" />
                <span className="text-[12px]">View Details</span>
              </button>
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-12 items-center transition duration-300 rounded-[15px] py-2 mb-4 text-white">
              {/* Name */}
              <div className="col-span-1 flex items-center gap-3">
                <img
                  src={person}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-[10px] lg:text-[12px] text-wrap lg:text-nowrap font-medium whitespace-normal">
                  Mike smith
                </span>
              </div>

              {/* Reason */}
              <div className="col-span-3 md:pl-6 lg:pl-20">
                <p className="text-[10px] lg:text-[12px] leading-relaxed whitespace-normal pr-4">
                  Lorem ipsum dolor sit amet consectetur. Donec mattis
                  vestibulum.
                </p>
              </div>

              {/* Reported User */}
              <div className="col-span-3 md:pl-6 lg:pl-20 flex items-center gap-3">
                <img
                  src={person}
                  alt="Reported User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-[12px] whitespace-normal">
                  Mike Smith
                </span>
              </div>

              {/* Report Date */}
              <div className="col-span-3 text-[12px]">11/22/44</div>

              {/* Action */}
              <div className="col-span-2 flex justify-start">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-[#2F7EF7] flex items-center justify-center px-4 py-2 rounded-[8px] gap-2 hover:bg-[#2F7EF7]/90 transition-colors"
                >
                  <img src={view} alt="" className="w-4 h-4" />
                  <span className="text-[12px]">View</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Pagination />
      </div>
      <ReportedUserModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}
