import EventFilter from "../../../components/app/event/EventFilter";
import EventList from "../../../components/app/event/EventList";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import EventSkeletonRow from "../../../components/app/event/EventSkeletonRow";


export default function Event() {
  const [pageNo,setPageNo]=useState(1)
  const [events,setEvents]=useState([])
  const [loadingEvents,setLoadingEvents]=useState(false)
  const [pagnition,setPagnition]=useState({})  
  
  const [type,setType]=useState("public")
  const [status,setStatus]=useState("upcoming")
  
  const getEvents=async()=>{
    try {
      setLoadingEvents(true)
      const response=await axios.get(`/event/get-events?type=${type}&status=${status}&page=${pageNo}&limit=10`)
      setEvents(response?.data?.data.events)
      setPagnition(response?.data?.pagination)
    } catch (error) {
      console.log(error)
    }finally{
      setLoadingEvents(false)
    }
  }
  useEffect(()=>{
    getEvents()
  },[pageNo,type,status])
 
  return (
    <div className="h-[calc(90%)-2rem]">
      <div className="flex justify-between  flex-col sm:flex-row items-start sm:items-center" >
        <h3 className="font-[500] text-[28px] text-white">Events</h3>
        <EventFilter  type={type} setType={setType} status={status} setStatus={setStatus}  />
      </div>
{loadingEvents ? ([...Array(10)].map((_,index)=>(<EventSkeletonRow key={index}/>))): <EventList setPageNo={setPageNo} eventList={events} pagnition={pagnition}/>}
    </div>
  );
}
