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
export default function CategoryChip({ setIsEditCategory }) {
  return (
    <div className="bg-[#13131399] h-[77vh] rounded-[15px] p-4 mt-5 ">
      <div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className="me-1.5 inline-block size-6 rounded-full"
              src={confrence}
              alt="confrence"
            />
            <h3 className="font-[500] text-[16px] text-white">
              Social Gatherings
            </h3>
          </div>
          <div className="flex gap-5 items-center">
            <button onClick={() => setIsEditCategory(true)}>
              <CiEdit color="#2F7EF7" size={25} />
            </button>
            <button>
              <FaRegTrashAlt color="red" size={25} />
            </button>
          </div>
        </div>
        <div className="inline-flex flex-wrap gap-2 mt-5 bg-[#2626264D] w-full rounded-[15px] p-3">
          <div className="inline-flex w-full  sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
            <div className="whitespace-nowrap text-xs font-medium text-white">
              Conferences & Summits
            </div>
            <div className="ms-2.5 inline-flex w-full justify-end items-center size-5 rounded-full cursor-pointer">
              <IoMdClose className="text-white text-2xl" />
            </div>
          </div>
          <div className="inline-flex w-full sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
            <div className="whitespace-nowrap text-xs font-medium text-white">
              Fashion Shows
            </div>
            <div className="ms-2.5 inline-flex w-full justify-end items-center size-5 rounded-full cursor-pointer ">
              <IoMdClose className="text-white text-2xl" />
            </div>
          </div>
          <div className="inline-flex w-full sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
            <div className="whitespace-nowrap text-xs font-medium text-white">
              Art Exhibitions
            </div>
            <div className="ms-2.5 w-full inline-flex justify-end items-center size-5 rounded-full cursor-pointer">
              <IoMdClose className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className="me-1.5 inline-block size-6 rounded-full"
              src={concert}
              alt="confrence"
            />
            <h3 className="font-[500] text-[16px] text-white">
              Social Gatherings
            </h3>
          </div>
          <div className="flex gap-5 items-center">
            <button onClick={() => setIsEditCategory(true)}>
              <CiEdit color="#2F7EF7" size={25} />
            </button>
            <button>
              <FaRegTrashAlt color="red" size={25} />
            </button>
          </div>
        </div>
        <div className="inline-flex flex-wrap gap-2 mt-5 bg-[#2626264D] w-full rounded-[15px] p-3">
          <div className="inline-flex w-full sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
            <div className="whitespace-nowrap text-xs font-medium text-white">
              Music Festivals
            </div>
            <div className="ms-2.5 inline-flex w-full justify-end items-center size-5 rounded-full cursor-pointer">
              <IoMdClose className="text-white text-2xl" />
            </div>
          </div>
          <div className="inline-flex w-full sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
            <div className="whitespace-nowrap text-xs font-medium text-white">
              Concerts
            </div>
            <div className="ms-2.5 inline-flex justify-end w-full items-center size-5 rounded-full cursor-pointer">
              <IoMdClose className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className="me-1.5 inline-block size-6 rounded-full"
              src={confrence}
              alt="confrence"
            />
            <h3 className="font-[500] text-[16px] text-white">
              Social Gatherings
            </h3>
          </div>
          <div className="flex gap-5 items-center">
            <button onClick={() => setIsEditCategory(true)}>
              <CiEdit color="#2F7EF7" size={25} />
            </button>
            <button>
              <FaRegTrashAlt color="red" size={25} />
            </button>
          </div>
        </div>
        <div className="inline-flex flex-wrap gap-2 mt-5 bg-[#2626264D] w-full rounded-[15px] p-3">
          <div className="inline-flex w-full  sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
            <div className="whitespace-nowrap text-xs font-medium text-white">
              Conferences & Summits
            </div>
            <div className="ms-2.5 inline-flex w-full justify-end items-center size-5 rounded-full cursor-pointer">
              <IoMdClose className="text-white text-2xl" />
            </div>
          </div>
          <div className="inline-flex w-full sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
            <div className="whitespace-nowrap text-xs font-medium text-white">
              Fashion Shows
            </div>
            <div className="ms-2.5 inline-flex w-full justify-end items-center size-5 rounded-full cursor-pointer ">
              <IoMdClose className="text-white text-2xl" />
            </div>
          </div>
          <div className="inline-flex w-full sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
            <div className="whitespace-nowrap text-xs font-medium text-white">
              Art Exhibitions
            </div>
            <div className="ms-2.5 w-full inline-flex justify-end items-center size-5 rounded-full cursor-pointer">
              <IoMdClose className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
