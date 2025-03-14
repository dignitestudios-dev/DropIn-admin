import React, { useState } from "react";
import CategoryChip from "../../../components/app/Category/CategoryChip";
import CreateCategory from "../../../components/app/Category/CreateCategory";

export default function Category() {
  const [isCategory, setIsCategory] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-[500] text-[28px] text-white">Add Category</h3>
        <button
          onClick={() => setIsCategory(!isCategory)}
          className="w-[180px] h-[49px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
        >
          Create
        </button>
      </div>
      <CategoryChip />
      <CreateCategory
        setIsOpen={setIsCategory}
        isOpen={isCategory}
      />
    </div>
  );
}
