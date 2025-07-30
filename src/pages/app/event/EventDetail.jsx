import {
  coverPhoto,
} from "../../../assets/export";
import EventDetailHeader from "../../../components/app/event/EventDetailHeader";
import { MdEventSeat } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import EventPeopleGoing from "../../../components/app/event/EventPeopleGoing";
import { useLocation } from "react-router";
import { formatTimeRangeTo12Hour, formatToDay, formatToFullMonthYearWithDay, formatToMonthAbbreviation } from "../../../lib/helpers";
import axios from "../../../axios";
import { useEffect, useState } from "react";
import EventDetailSkeleton from "../../../components/app/event/EventDetailSkeleton";
export default function EventDetail() {
  const [loading,setLoading]=useState(false)
  const [loadingDetail,setLoadingDetail]=useState(false)
  const [eventDetail,setEventDetail]=useState({})
const [peopleGoing,setPeopleGoing]=useState([])
const location=useLocation()
const event=location.state?.event
  
  const getEventDetail=async()=>{
    try {
      setLoadingDetail(true)
      const response=await axios.get(`/event/get-event-details?eventID=${event._id}`)
      setEventDetail(response?.data?.data?.event)
    } catch (error) {
      console.log(error)
    }finally{
      setLoadingDetail(false)
    }
  }
  const getEventPeopleGoing=async()=>{
    try {
      setLoading(true)
      const response=await axios.get(`/event/get-event-attendees?eventID=${event._id}&page=1&limit=10`)
      setPeopleGoing(response?.data?.data?.attendees)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getEventDetail()
    getEventPeopleGoing()
  },[])
  console.log(eventDetail,"eventDetail")
  return (
    loadingDetail ? <EventDetailSkeleton/> : (
    <div>
      <div className="relative w-[100%] flex justify-center">
        <img
          src={eventDetail.coverPhoto}
          alt="LogInBg"
          className="w-full rounded-[15px] mx-auto shadow-2xl object-cover h-[197px]   absolute"
        />
      </div>
      <EventDetailHeader eventDetail={eventDetail}/>

      <div className="grid grid-cols-1 lg:grid-cols-6 grid-rows-1 lg:grid-rows-6 gap-4">
        <div className="col-span-12  lg:h-auto lg:col-span-2 row-start-2 h-[100px] sm:-[auto] lg:row-span-1 flex items-center gap-3 bg-[#13131399] backdrop-blur-[50] p-5 rounded-[15px] shadow-lg">
          <div className="w-[48px] h-[48px] rounded-[9px] overflow-hidden">
            <div className="bg-[#2F7EF7] text-center text-white  font-[400] text-[11px]">
              {formatToMonthAbbreviation(eventDetail.date)}
            </div>
            <div className="h-[70%] text-center bg-[#434343] text-[20px] font-[] text-white">
              {formatToDay(eventDetail.date)}
            </div>
          </div>
          <div>
            <p className="text-white font-[400] text-[13px]  ">
              {formatToFullMonthYearWithDay(eventDetail.date)}{" "}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-2">
                <FaClock color="#2F7EF7" />
                <p className="text-white font-[400] text-[11px]  ">
                  {formatTimeRangeTo12Hour(eventDetail?.startTime, eventDetail?.endTime)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MdEventSeat color="#2F7EF7" />
                <p className="text-white font-[400] text-[11px]  ">{eventDetail.attendeeCount}/{eventDetail.attendeeLimit}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12  lg:col-span-2 row-span-2 lg:row-span-5 row-start-3 lg:col-start-1 lg:row-start-2 bg-[#13131399] backdrop-blur-[50] p-5 rounded-[15px] shadow-lg ">
          <div className="flex items-center justify-between">
            <h3 className="text-[20px] text-white font-[400]">People Going</h3>
            <p className="text-[13px] font-[300] text-white">{eventDetail.attendeeCount}/{eventDetail.attendeeLimit}</p>
          </div>
          <div className="my-2 flex flex-col gap-3 h-[300px] overflow-auto ">
           
             
            {peopleGoing?.map((peopleGoing,index)=>(
              <EventPeopleGoing key={index} peopleGoing={peopleGoing}/>)
            )}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 row-span-1 row-start-1 lg:row-span-3 lg:col-start-3 lg:row-start-1 bg-[#13131399] backdrop-blur-[50] p-5 rounded-[15px] shadow-lg">
          <h3 className="text-[20px] text-white font-[500]">Event Details</h3>
          <p className="text-white font-[400] text-[14px] mt-3">
           {eventDetail.description}
          </p>
        </div>
      </div>
    </div>
          )
  );
}
