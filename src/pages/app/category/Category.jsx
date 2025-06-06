import { useState } from "react";
import CategoryChip from "../../../components/app/category/CategoryChip";
import CreateCategory from "../../../components/app/category/CreateCategory";
import EditCategory from "../../../components/app/category/EditCategory";

export default function Category() {
  const [isCategory, setIsCategory] = useState(false);
  const [isEditCategory, setIsEditCategory] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="font-[500] text-[20px] sm:text-[28px] text-white">
          Category
        </h3>
        <button
          onClick={() => setIsCategory(!isCategory)}
          className="w-[80px] sm:w-[180px] h-[40px] sm:h-[49px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
        >
          Add Category{" "}
        </button>
      </div>
      <CategoryChip setIsEditCategory={setIsEditCategory} />
      <CreateCategory setIsOpen={setIsCategory} isOpen={isCategory} />
      <EditCategory setIsOpen={setIsEditCategory} isOpen={isEditCategory} />
    </div>
  );
}
