import {
  concert,
  confrence,
  exhibition,
  fasion,
  music,
} from "../../../assets/export";
import { IoMdClose } from "react-icons/io";

export default function CategoryChip() {
  return (
    <div className="inline-flex flex-wrap gap-2 mt-10">
      <div className="inline-flex flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
        <img
          className="me-1.5 inline-block size-6 rounded-full"
          src={confrence}
          alt="confrence"
        />
        <div className="whitespace-nowrap text-xs font-medium text-white">
          Conferences & Summits
        </div>
        <div className="ms-2.5 inline-flex justify-center items-center size-5 rounded-full cursor-pointer">
          <IoMdClose className="text-white text-2xl" />
        </div>
      </div>
      <div className="inline-flex flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
        <img
          className="me-1.5 inline-block size-6 rounded-full"
          src={fasion}
          alt="fasion"
        />
        <div className="whitespace-nowrap text-xs font-medium text-white">
          Fashion Shows
        </div>
        <div className="ms-2.5 inline-flex justify-center items-center size-5 rounded-full cursor-pointer ">
          <IoMdClose className="text-white text-2xl" />
        </div>
      </div>
      <div className="inline-flex flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
        <img
          className="me-1.5 inline-block size-6 rounded-full"
          src={exhibition}
          alt="exhibition"
        />
        <div className="whitespace-nowrap text-xs font-medium text-white">
          Art Exhibitions
        </div>
        <div className="ms-2.5 inline-flex justify-center items-center size-5 rounded-full cursor-pointer">
          <IoMdClose className="text-white text-2xl" />
        </div>
      </div>
      <div className="inline-flex flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
        <img
          className="me-1.5 inline-block size-6 rounded-full"
          src={music}
          alt="exhibition"
        />
        <div className="whitespace-nowrap text-xs font-medium text-white">
          Music Festivals
        </div>
        <div className="ms-2.5 inline-flex justify-center items-center size-5 rounded-full cursor-pointer">
          <IoMdClose className="text-white text-2xl" />
        </div>
      </div>
      <div className="inline-flex flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">
        <img
          className="me-1.5 inline-block size-6 rounded-full"
          src={concert}
          alt="exhibition"
        />
        <div className="whitespace-nowrap text-xs font-medium text-white">
          Concerts
        </div>
        <div className="ms-2.5 inline-flex justify-center items-center size-5 rounded-full cursor-pointer">
          <IoMdClose className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
}
