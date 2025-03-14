import { useState } from "react";
import ReportedUsers from "../../../components/app/Report/ReportedUsers";
import ReportedEvents from "../../../components/app/Report/ReportedEvent";

export default function Report() {
  const [activeTab, setActiveTab] = useState("users");
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
      {activeTab == "users" ? <ReportedUsers /> : <ReportedEvents/>}
    </div>
  );
}
