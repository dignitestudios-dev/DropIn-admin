import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
export default function Card() {
  return (
    <div className="bg-[#13131399] mt-3 backdrop-blur-[50px] rounded-[15px]  md:h-[180px] px-3 py-3">
      <h3 className="font-normal text-white text-[18px]">Title Here</h3>
      <p className="font-normal text-white text-[14px]">
        Lorem ipsum dolor sit amet consectetur. Aliquet mus feugiat eget proin
        etiam eget in semper sed. Cursus amet condimentum.
      </p>
      <span className="text-[#84818A] text-[12px] font-[400] mt-2">Posted at 12:45 AM</span>
      <div className="flex items-center gap-3 mt-3">
        <button className="p-5 h-[49px] rounded-[14px] bg-[#36363699] text-[#FF4040] flex gap-2 items-center justify-center text-md font-medium">
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}
