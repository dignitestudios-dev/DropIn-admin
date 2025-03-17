import { IoLocationSharp } from "react-icons/io5";
import {
  eventChatIcon,
  EventList,
  locationWithXbox,
  person,
} from "../../../assets/export";
import { NavLink } from "react-router";
export default function EventDetailHeader() {
  
  return (
    <div className="bg-[#13131399]  flex justify-between flex-wrap lg:flex-nowrap m-5 mt-24 p-3 rounded-[15px] lg:h-[150px] gap-8 backdrop-blur-[50px]">
      <div className="flex relative w-full items-center py-2 gap-3 sm:border-b lg:border-r border-[#D7D7D7] sm:border-0 lg:border-b-0">
        <img src={EventList} className="h-[121px]" alt="person" />
        <div className="flex justify-between flex-wrap w-full">
          <div>
            <h3 className="text-[#FFFFFF] text-[20px] font-[500]">Xbox E3</h3>
            <p className="text-[#D1D1D1] text-[13px] font-normal">Gaming</p>
            <p className="text-[#D1D1D1] text-[13px] font-normal">
              public Event
            </p>
          </div>
          <div className="flex flex-col justify-between pr-10">
            <div className="bg-[#F2C861] px-2 text-[10px] font-normal text-white rounded-[6px]">
              Featured
            </div>
            <NavLink to={'/chat'} >
              <img src={eventChatIcon} alt="Event Chat" className="w-10" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full sm:border-b lg:border-r py-2 border-[#D7D7D7] sm:border-0 lg:border-b-0">
        <h3 className="font-[500] text-[20px] text-white">Host</h3>
        <div className="flex items-center gap-5 mt-3">
          <img src={person} alt="person" className="w-16 rounded-full" />
          <div>
            <h3 className="text-[#FFFFFF] text-[20px] font-[500]">
              Mike Smith
            </h3>
            <p className="text-[#FFFFFF] text-[14px] font-normal">@mikesmith</p>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <h3 className="font-[500] text-[20px] text-white">Location</h3>
        <div className="flex items-center gap-5 mt-3">
          <img
            src={locationWithXbox}
            alt="Location Xbox Icon"
            className="w-[86px]"
          />
          <div className="flex items-center gap-1">
            <IoLocationSharp size={25} color="#2F7EF7" />
            <p className="text-[#FFFFFF] text-[14px] font-normal">
              1766 Bahringer Via, Farrell furt 10643
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
