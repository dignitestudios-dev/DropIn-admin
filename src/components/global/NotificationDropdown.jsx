import React from "react";
import { beardGuy } from "../../assets/export";

export default function NotificationDropdown() {
  return (
    <div>
      <ul>
        {[1, 2, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <li key={item} className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={beardGuy}
                  alt="List image"
                />
              </div>
              <div className="flex items-center justify-between flex-1 min-w-0">
                <p className="text-sm font-[500]  text-white ">
                  John Alex wants to connect
                </p>
                <p className="text-sm font-[400]  text-[#727272]">5min</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
