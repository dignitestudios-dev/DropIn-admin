import { useState } from "react";
import Card from "../../../components/app/notification/Card";
import CreateNotification from "../../../components/app/notification/CreateNotificationModal";

export default function PushNotification() {
  const [isNotification, setIsNotification] = useState(false);
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
        {[1, 2, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Card key={item} />
        ))}
      </div>

      <CreateNotification
        setIsOpen={setIsNotification}
        isOpen={isNotification}
      />
    </div>
  );
}
