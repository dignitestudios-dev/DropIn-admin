import { IoLocationSharp } from "react-icons/io5";
import {
  eventChatIcon,
  EventList,
  locationWithXbox,
  person,
} from "../../../assets/export";
export default function EventDetailHeader({eventDetail}) {
  
  return (
    <div className="bg-[#13131399]  flex justify-between flex-wrap lg:flex-nowrap m-4 mt-24 p-3 rounded-[15px] lg:h-[150px] gap-8 backdrop-blur-[50px]">
      <div className="flex relative w-full items-center py-2 gap-3 sm:border-b lg:border-r border-[#D7D7D7] sm:border-0 lg:border-b-0">
        <img src={eventDetail.coverPhoto} className="h-[121px] w-[150px] object-cover" alt="person" />
        <div className="flex justify-between flex-wrap w-full">
          <div>
            <h3 className="text-[#FFFFFF] text-[20px] font-[500]">{eventDetail.title}</h3>
            <p className="text-[#D1D1D1] text-[13px] font-normal">{eventDetail.type}</p>
            {/* <p className="text-[#D1D1D1] text-[13px] font-normal">
              public Event
            </p> */}
          </div>
          <div className="flex flex-col justify-between pr-10">
          <div
  className={`px-2 text-[10px] font-normal rounded-[6px] ${
    eventDetail.status === "upcoming"
      ? "bg-[#F2C861] text-black"
      : eventDetail.status === "canceled"
      ? "bg-[#FF6B6B] text-white"
      : eventDetail.status === "live"
      ? "bg-[#2F7EF7] text-white"
      : eventDetail.status === "ended"
      ? "bg-gray-500 text-white"
      : "bg-gray-500 text-white"
  }`}
>
  {eventDetail.status}
</div>
            {/* <NavLink to={'/chat'} >
              <img src={eventChatIcon} alt="Event Chat" className="w-10" />
            </NavLink> */}
          </div>
        </div>
      </div>
      <div className="w-full sm:border-b lg:border-r py-2 border-[#D7D7D7] sm:border-0 lg:border-b-0">
        <h3 className="font-[500] text-[20px] text-white">Host</h3>
        <div className="flex items-center gap-5 mt-3">
          <img src={eventDetail.host?.profilePicture} alt="person" className="w-16  h-16 rounded-full" />
          <div>
            <h3 className="text-[#FFFFFF] text-[20px] font-[500]">
              {eventDetail.host?.firstName}
            </h3>
            <p className="text-[#FFFFFF] text-[14px] font-normal">{eventDetail.host?.email}</p>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <h3 className="font-[500] text-[20px] text-white">Location</h3>
        <div className="flex items-center gap-5 mt-3">
          {/* <img
            src={locationWithXbox}
            alt="Location Xbox Icon"
            className="w-[86px]"
          /> */}
          <div className="flex items-center gap-1">
            <IoLocationSharp size={25} color="#2F7EF7" />
            <p className="text-[#FFFFFF] text-[14px] font-normal">
            {eventDetail?.location?.streetAddress}, {eventDetail?.location?.city}, {eventDetail?.location?.state} ,{eventDetail?.location?.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
