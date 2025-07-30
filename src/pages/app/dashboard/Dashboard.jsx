import {
  dashboardEvent,
  dashboardUser,
  featuredEvent,
  LogInBg,
} from "../../../assets/export";
import HorizontalBarChart from "../../../components/app/dashboard/BarChart";
import { LineGraph } from "../../../components/app/dashboard/graph";
import { useState } from "react";
import axios from "../../../axios";
import { useEffect } from "react";
const Dashboard = () => {
  const[state,setState]=useState({})
  const[lineGraphData,setLineGraphData]=useState({})
  const[year,setYear]=useState(2024)
  const[eventGraphData,setEventGraphData]=useState('')
  const getUsers=async()=>{
    try {
      const response=await axios.get("/dashboard/get-stats")
      setState(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getLineGraph=async()=>{
    try {
      const response=await axios.get(`/dashboard/get-user-data?year=${year}`)
      setLineGraphData(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const eventGraph=async()=>{
    try {
      const response=await axios.get(`/dashboard/get-event-data`)
      setEventGraphData(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getUsers()
    getLineGraph()
    eventGraph()
  },[])
  console.log(lineGraphData ,"lineGraphData")
  return (
    <div>
      <div className="relative w-[100%] flex justify-center">
        <img
          src={LogInBg}
          alt="LogInBg"
          className="w-full  mx-auto shadow-2xl h-[170px]   absolute"
        />
      </div>
      <div className="p-5">
        <h3 className="text-[28px] font-[500] text-white">
          Hello Austin Robertson !
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
          <div className="backdrop-blur-[50px] bg-[#13131399]  flex p-5 rounded-[15px] items-center justify-between">
            <div>
              <p className="font-500 text-[22px] text-[#C03221]">{state.userCount}</p>
              <p className="font-500 text-[11px] text-[#8A92A6]">Users</p>
            </div>
            <div>
              <img src={dashboardUser} className="w-12" alt="total user" />
            </div>
          </div>
          <div className="bg-[#13131399] backdrop-blur-[50px] rounded-[15px] p-5 flex items-center justify-between">
            <div>
              <p className="font-500 text-[22px] text-[#068B92]">{state.eventCount}</p>
              <p className="font-500 text-[11px] text-[#8A92A6]">
                Events Created
              </p>
            </div>
            <div>
              <img src={dashboardEvent} className="w-12" alt="total user" />
            </div>
          </div>
          <div className="bg-[#13131399] backdrop-blur-[50px] rounded-[15px] p-5 flex items-center justify-between">
            <div>
              <p className="font-500 text-[22px] text-[#17904B]">{state.featuredEventCount}</p>
              <p className="font-500 text-[11px] text-[#8A92A6]">
                Featured Events
              </p>
            </div>
            <div>
              <img src={featuredEvent} className="w-12" alt="total user" />
            </div>
          </div>
        </div>
      </div>
      <LineGraph dGraphData={lineGraphData} year={year} setYear={setYear}/>
      <HorizontalBarChart eGraphData={eventGraphData}/>
    </div>
  );
};

export default Dashboard;
