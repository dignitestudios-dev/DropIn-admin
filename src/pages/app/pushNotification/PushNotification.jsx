import { useEffect, useState } from "react";
import Card from "../../../components/app/notification/Card";
import CreateNotification from "../../../components/app/notification/CreateNotificationModal";
import axios from "../../../axios";
import { CiLight } from "react-icons/ci";

export default function PushNotification() {
  const [isNotification, setIsNotification] = useState(false);
  const [notificationList,setNotificationList]=useState([])
  const [loading,setLoading]=useState(false)
  const getNotificationList=async()=>{
    try {
      setLoading(true)
      const response=await axios.get("/notification/get-notifications?page=1&limit=10")
      setNotificationList(response?.data?.data?.notifications)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  const handleCheckboxChange = async (id) => {
    try {
     const response = await axios.post(`/notification/read-notification?notificationID=${id}`);
     if (response.status === 200) {
       getNotificationList();
     }
    } catch (error) {
     console.error("Error toggling notification:", error);
    }
   };
  useEffect(()=>{
    getNotificationList()
  },[])
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="font-[500] text-[20px] sm:text-[28px] text-white">Push Notification</h3>
        <button
          onClick={() => setIsNotification(!isNotification)}
          className="w-[80px] sm:w-[180px] h-[40px] sm:h-[49px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
        >
          Create
        </button>
      </div>
      <div className=" gap-5  mt-3">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        ) : (
          notificationList?.map((item) => (
            <Card key={item._id} item={item} handleCheckboxChange={handleCheckboxChange} />
          ))
        )}
      </div>

      <CreateNotification
        setIsOpen={setIsNotification}
        isOpen={isNotification}
        getNotificationList={getNotificationList}
      />
    </div>
  );
}
