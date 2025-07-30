import React from "react";

export default function EventDetailSkeleton() {
  return (
    <div>
      {/* Cover Image */}
      <div className="relative w-full flex justify-center mb-6">
        <div className="w-full h-[197px] bg-gray-700 rounded-[15px] animate-pulse shadow-2xl" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-6 grid-rows-1 lg:grid-rows-6 gap-4">
        {/* Date / Time / Attendee Box */}
        <div className="col-span-12 lg:col-span-2 row-start-2 lg:row-span-1 bg-[#13131399] backdrop-blur-[50] p-5 rounded-[15px] shadow-lg animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-[48px] h-[48px] rounded-[9px] bg-gray-600" />
            <div className="flex flex-col gap-2">
              <div className="w-[120px] h-[10px] bg-gray-600 rounded" />
              <div className="flex items-center gap-3">
                <div className="w-[80px] h-[10px] bg-gray-600 rounded" />
                <div className="w-[50px] h-[10px] bg-gray-600 rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* People Going List */}
        <div className="col-span-12 lg:col-span-2 row-span-2 lg:row-span-5 row-start-3 lg:col-start-1 lg:row-start-2 bg-[#13131399] backdrop-blur-[50] p-5 rounded-[15px] shadow-lg animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="w-[120px] h-[14px] bg-gray-600 rounded" />
            <div className="w-[40px] h-[12px] bg-gray-600 rounded" />
          </div>
          <div className="space-y-3">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-600" />
                <div className="w-full h-[10px] bg-gray-600 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Event Details */}
        <div className="col-span-12 lg:col-span-4 row-span-1 row-start-1 lg:row-span-3 lg:col-start-3 lg:row-start-1 bg-[#13131399] backdrop-blur-[50] p-5 rounded-[15px] shadow-lg animate-pulse">
          <div className="w-[150px] h-[20px] bg-gray-600 rounded mb-3" />
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-[10px] bg-gray-600 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
