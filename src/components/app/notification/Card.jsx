import React from "react";

export default function Card() {
  return (
    <div className="bg-[#13131399] backdrop-blur-[50px] rounded-[15px]  md:h-[180px] px-3 py-3">
      <h3 className="font-normal text-white text-[18px]">Title Here</h3>
      <p className="font-normal text-white text-[14px]">
        Lorem ipsum dolor sit amet consectetur. Aliquet mus feugiat eget proin
        etiam eget in semper sed. Cursus amet condimentum.
      </p>
      <div className="flex items-center gap-3 mt-3">
        <button className="w-[180px] h-[49px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium">
          Push
        </button>
        <button className="w-[180px] h-[49px] rounded-[14px] bg-[#FF3535] text-white flex gap-2 items-center justify-center text-md font-medium">
          Delete
        </button>
      </div>
    </div>
  );
}
