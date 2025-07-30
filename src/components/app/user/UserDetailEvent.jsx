import { useNavigate } from "react-router";
import { calendar, EventList, EventSeat, time } from "../../../assets/export";
import { dateFormate, formatTimeTo12Hour } from "../../../lib/helpers";

export default function UserDetailEvent({event}) {
  const navigate=useNavigate("");
  
  return (
    <div onClick={()=>navigate("/event/1")} className="cursor-pointer mx-auto  bg-[#13131399] backdrop-blur-[50px] rounded-xl shadow-md overflow-hidden m-3">
      <div className="md:flex">
        <div className="md:flex-shrink-0 p-3">
          <img
            className="h-24 rounded-[15px] "
            src={event?.coverPhoto}
            alt="Events Image"
          />
        </div>
        <div className="p-5 w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] text-white font-[500]">
              {event?.title}
            </h3>
            <div className="bg-[#F2C861] px-2 text-[10px] font-normal rounded-[6px]">
              Featured
            </div>
          </div>
          <p className="text-[11px] font-normal mt-2 text-white">
            {event?.type}
          </p>         
          <ul className="flex items-center justify-between w-full text-white mt-3  sm:gap-10">
            <li className="flex items-center gap-2 w-full border-r-2 " >
                <img src={calendar} alt="calendar" className="w-6" />
                <p className="font-normal text-[11px]" >{dateFormate(event?.startDate)}</p>
            </li>
            <li className="flex items-center sm:gap-2 border-r-2 w-full" >
                <img src={time} alt="time" className="w-6" />
                <p className="font-normal text-[11px]" >{formatTimeTo12Hour(event?.startTime)}</p>
            </li>
            <li className="w-full flex items-center gap-2" >
                <img src={EventSeat} alt="eventSeat" className="w-6" />
                <p className="font-normal text-[11px]" >{event?.attendeeCount}/{event?.attendeeLimit}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
