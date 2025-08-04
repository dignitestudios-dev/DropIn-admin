import { useEffect, useState } from "react";
import CategoryChip from "../../../components/app/category/CategoryChip";
import CreateCategory from "../../../components/app/category/CreateCategory";
import EditCategory from "../../../components/app/category/EditCategory";
import DeleteModal from "../../../components/app/category/DeleteModal";
import MoveSubCategory from "../../../components/app/category/MoveSubCategory";
import SuccessCategory from "../../../components/app/category/SuccessCategory";
import axios from "../../../axios";
import Pagination from "../../../components/global/Pagination";
export default function Category() {
  const [isCategory, setIsCategory] = useState(false);
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [isDelCategory, setIsDelCategory] = useState(false);
  const [loading, setLoading] = useState(false);
  const [SuccessCateg, setSuccessCateg] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [categoryData, setCategoryData] = useState([]);
  const [pagnition, setPagnition] = useState({});
  const [editdata,setEditdata]=useState({})
  const getCategoryData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/category/get-categories?page=${pageNo}&limit=10`
      );
      setCategoryData(response.data.data.categories);
      setPagnition(response.data.pagination);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, [pageNo]);
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
      <div className=" p-4 mt-5 h-[63vh] overflow-auto table-scroller flex flex-col gap-8 ">
        {categoryData.map((item, index) => {
          return (
            <CategoryChip
              setIsEditCategory={setIsEditCategory}
              isDelCategory={setIsDelCategory}
              setPageNo={setPageNo}
              pagnition={pagnition}
              categoryData={item}
              key={index}
              setEditdata={setEditdata}
            />
          );
        })}
      </div>
        <div className="flex justify-end items-end  h-[10vh]">
          <Pagination setPageNo={setPageNo} pagnition={pagnition} />
        </div>
      <CreateCategory setIsOpen={setIsCategory} isOpen={isCategory} getCategoryData={getCategoryData}/>
      <EditCategory setIsOpen={setIsEditCategory} isOpen={isEditCategory} editdata={editdata} getCategoryData={getCategoryData}/>
      {/* <DeleteModal setIsOpen={setIsDelCategory} isOpen={isDelCategory} setMoveSubCateg={setMoveSubCateg} moveSubCateg={moveSubCateg} /> */}
      {/* <MoveSubCategory setIsOpen={setMoveSubCateg} isOpen={moveSubCateg} isSuccess={SuccessCateg} setSuccess={setSuccessCateg} /> */}
      {/* <SuccessCategory setIsOpen={setSuccessCateg} isOpen={SuccessCateg} /> */}
    </div>
  );
}
