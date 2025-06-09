import { useState } from "react";
import CategoryChip from "../../../components/app/category/CategoryChip";
import CreateCategory from "../../../components/app/category/CreateCategory";
import EditCategory from "../../../components/app/category/EditCategory";
import DeleteModal from "../../../components/app/category/DeleteModal";
import MoveSubCategory from "../../../components/app/category/MoveSubCategory";
import SuccessCategory from "../../../components/app/category/SuccessCategory";

export default function Category() {
  const [isCategory, setIsCategory] = useState(false);
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [isDelCategory, setIsDelCategory] = useState(false);
  const [moveSubCateg, setMoveSubCateg] = useState(false);
  const [SuccessCateg, setSuccessCateg] = useState(false);
  console.log(moveSubCateg,"update")
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
      <CategoryChip
        setIsEditCategory={setIsEditCategory}
        isDelCategory={setIsDelCategory}
      />
      <CreateCategory setIsOpen={setIsCategory} isOpen={isCategory} />
      <EditCategory setIsOpen={setIsEditCategory} isOpen={isEditCategory} />
      <DeleteModal setIsOpen={setIsDelCategory} isOpen={isDelCategory} setMoveSubCateg={setMoveSubCateg} moveSubCateg={moveSubCateg} />
      <MoveSubCategory setIsOpen={setMoveSubCateg} isOpen={moveSubCateg} isSuccess={SuccessCateg} setSuccess={setSuccessCateg} />
      <SuccessCategory setIsOpen={setSuccessCateg} isOpen={SuccessCateg} />
    </div>
  );
}
