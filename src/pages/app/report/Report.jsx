import { useEffect, useState } from "react";
import ReportedUsers from "../../../components/app/report/ReportedUsers";
import ReportedEvents from "../../../components/app/report/ReportedEvent";
import ReportedChat from "../../../components/app/report/ReportedChat";
import ReportedGroup from "../../../components/app/report/ReportedGroup";
import axios from "../../../axios";
import ReportedListSkeleton from "../../../components/app/report/ReportedListSkeleton";


export default function Report() {
  const [loading, setLoading] = useState(false);
  const [reportList, setReportList] = useState([]);
  const [activeTab, setActiveTab] = useState("user");
  const [pageNo,setPageNo]=useState(1)
  const [pagination, setPagination] = useState({});

  console.log(pageNo,"response")
  const getReportedUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/report/get-reports?type=${activeTab}&page=${pageNo}&limit=10`
      );
      setReportList(response?.data?.data?.reports);
      setPagination(response?.data?.pagination);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportedUsers();
  }, [activeTab, pageNo]); // 🔁 Fetch again when tab changes
console.log(pagination,"pagination")
  const tabList = ["user", "event", "chat", "group"];
  const tabLabels = {
    user: "User",
    event: "Event",
    chat: "Chat",
    group: "Group",
  };

  const tabComponents = {
    user: <ReportedUsers reportList={reportList} pagination={pagination} setPageNo={setPageNo} />,
    event: <ReportedEvents reportList={reportList} pagination={pagination} setPageNo={setPageNo} />,
    chat: <ReportedChat reportList={reportList} pagination={pagination} setPageNo={setPageNo} />,
    group: <ReportedGroup reportList={reportList} pagination={pagination} setPageNo={setPageNo} />,
    // providers: <ReportedProviders reportList={reportList} />,
    // services: <ReportedServices reportList={reportList} />,
  };

  return (
    <div>
      <div className="flex items-center gap-10">
        <h3 className="font-[500] text-[28px] text-white">Reports</h3>
        <div className="flex items-center gap-5 mt-2">
          {tabList.map((tab) => (
            <button
              key={tab}
              className={`bg-transparent ${
                activeTab === tab && "border-b-2 border-[#2F7EF7]"
              } text-white text-[14px] font-[400]`}
              onClick={() => setActiveTab(tab)}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {loading ? (
          <ReportedListSkeleton/>
        ) : (
          reportList?.length > 0 ? (
            tabComponents[activeTab]
          ) : (
            <p className="text-white text-[24px] font-[400] flex items-center justify-center h-[200px]">No reports found</p>
          )
        )}
      </div>
    </div>
  );
}
