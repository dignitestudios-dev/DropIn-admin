import { useNavigate } from "react-router";
import { view, EventList as EventImage } from "../../../assets/export";
import Pagination from "../../global/Pagination";

export default function EventList() {
  const navigate = useNavigate("");
  return (
    <div>
      <div className="h-[67vh] table-scroller bg-[#13131399] mt-3 rounded-[25px] overflow-x-auto whitespace-nowrap px-2 py-2 sm:py-0 sm:px-5 mb-6">
        {/* Header Row - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[15px] font-light mb-2">
          <div className="col-span-2 py-4 text-left font-semibold text-[11px]">
            Event Name
          </div>
          <div className="col-span-2 py-4 text-left font-semibold text-[11px]">
            Host Name
          </div>
          <div className="col-span-3 py-4 text-left font-semibold text-[11px]">
            Location
          </div>
          <div className="col-span-2 py-4 text-left font-semibold text-[11px]">
            Date
          </div>
          <div className="col-span-1 py-4 text-left font-semibold text-[11px]">
            Type
          </div>
          <div className="col-span-1 py-4 text-left font-semibold text-[11px]">
            Status
          </div>
          <div className="col-span-1 py-4 text-left font-semibold text-[11px]">
            Action
          </div>
        </div>

        {/* Event Rows */}
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index}>
            {/* Mobile View */}
            <div className="md:hidden bg-black bg-opacity-40 rounded-[15px] p-4 mb-4 text-white">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={EventImage}
                  alt="Event"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-[14px]">Event Name</p>
                  <p className="text-[12px] text-white/70 text-wrap">
                    Hosted by: Rolando Schowalter
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-[12px]">
                  <span className="w-24 opacity-70">Location:</span>
                  <span>29202 Jaleel Glens</span>
                </div>
                <div className="flex items-center text-[12px]">
                  <span className="w-24 opacity-70">Date:</span>
                  <span>Feb 20, 2025</span>
                </div>
                <div className="flex items-center text-[12px]">
                  <span className="w-24 opacity-70">Type:</span>
                  <span>Public</span>
                </div>
                <div className="flex items-center text-[12px]">
                  <span className="w-24 opacity-70">Status:</span>
                  <span className="bg-[#F2C861] text-black px-3 py-1 rounded-[6px]">
                    Featured
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate("/event/1")}
                className="bg-[#2F7EF7] w-full flex items-center justify-center px-4 py-2 rounded-[8px] gap-2 hover:bg-[#2F7EF7]/90 transition-colors"
              >
                <img src={view} alt="" className="w-4 h-4" />
                <span className="text-[12px]">View Event</span>
              </button>
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-12 text-white text-[14px] font-extralight border-b border-[#313131] transition duration-300  py-4 mb-4">
              <div className="col-span-2 flex items-center gap-3">
                <img
                  src={EventImage}
                  alt="Event"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-[12px] text-wrap lg:text-nowrap font-medium whitespace-normal">
                  Event Name
                </span>
              </div>

              <div className="col-span-2 flex items-center">
                <span className="text-[12px] whitespace-normal">
                  Rolando Schowalter
                </span>
              </div>

              <div className="col-span-3 flex items-center">
                <span className="text-[12px] whitespace-normal">
                  29202 Jaleel Glens
                </span>
              </div>

              <div className="col-span-2 flex items-center">
                <span className="text-[12px]">Feb 20, 2025</span>
              </div>

              <div className="col-span-1 flex items-center">
                <span className="text-[12px]">Public</span>
              </div>

              <div className="col-span-1 flex items-center">
                <span className="bg-[#F2C861] text-black text-[10px] px-1 py-1 rounded-[6px]">
                  Featured
                </span>
              </div>

              <div className="col-span-1 flex justify-start items-center">
                <button
                  onClick={() => navigate("/event/1")}
                  className="bg-[#2F7EF7] flex items-center justify-center px-1 py-1 rounded-[8px]  hover:bg-[#2F7EF7]/90 transition-colors"
                >
                  <img src={view} alt="" className="w-4 h-4" />
                  <span className="text-[11px]">View</span>
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
