import { useEffect, useState } from "react";
import ReportedUsers from "../../../components/app/report/ReportedUsers";
import ReportedEvents from "../../../components/app/report/ReportedEvent";
import axios from "../../../axios";
export default function Report() {
  const [loading,setLoading]=useState(false)
const [reportList,setReportList]=useState([])
  const [activeTab, setActiveTab] = useState("users");
  const getReportedUsers=async()=>{
    try {
      setLoading(true)
      const response=await axios.get("/report/get-reports?type=group&page=1&limit=10")
      setReportList(response?.data?.data?.reports)
      console.log(response,"response")
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getReportedUsers()
  },[])
  console.log("reportList",reportList)
  return (
    <div>
      <div className="flex items-center gap-10">
        <h3 className="font-[500] text-[28px] text-white">Reports</h3>
        <div className="flex items-center gap-5 mt-2">
          <button
            className={`bg-transparent ${
              activeTab == "users" && "border-b-2 border-[#2F7EF7]"
            } text-white text-[14px] font-[400]`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
          <button
            className={`bg-transparent ${
              activeTab == "events" && "border-b-2 border-[#2F7EF7]"
            } text-white text-[14px] font-[400]`}
            onClick={() => setActiveTab("events")}
          >
            Events
          </button>
        </div>
      </div>
      {activeTab == "users" ? <ReportedUsers reportList={reportList} /> : <ReportedEvents reportList={reportList}/>}
    </div>
  );
}
