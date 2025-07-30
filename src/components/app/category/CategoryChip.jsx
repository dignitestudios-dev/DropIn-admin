import {
  concert,
  confrence,
  exhibition,
  fasion,
  music,
} from "../../../assets/export";
import { IoMdClose } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import Pagination from "../../global/Pagination";
export default function CategoryChip({ setIsEditCategory,isDelCategory,setPageNo,pagnition ,categoryData }) {

  console.log(categoryData,"categoryData")
  return (
    <div className="bg-[#13131399]    rounded-[15px] p-4    ">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 me-1 inline-block size-6 rounded-full"
              src={categoryData.icon}
              alt="confrence"
            />
            <h3 className="font-[500] text-[16px] text-white">
              {categoryData.categoryID}
            </h3>
          </div>
          <div className="flex gap-5 items-center">
            <button onClick={() => setIsEditCategory(true)}>
              <CiEdit color="#2F7EF7" size={25} />
            </button>
            
          </div>
        </div>
        <div className="inline-flex flex-wrap gap-2 mt-5 bg-[#2626264D] w-full rounded-[15px] p-3">
        {categoryData.subcategories.map((item,index)=>{
          return(
          <div key={index} className="inline-flex w-full  sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-2">
            <div className="whitespace-nowrap text-xs font-medium text-white">
              {item.name}
            </div>
           
          </div>
         
        )
      })}
      </div>
  
     
    </div>
  );
}
