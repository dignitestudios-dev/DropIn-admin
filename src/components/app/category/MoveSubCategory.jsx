import React from "react";
import { IoMdClose } from "react-icons/io";
import { confrence, deleteIcon, MoveIcon, music, otherIcon, runIcon } from "../../../assets/export";
import Modal from "react-modal";
import { FaArrowRightLong } from "react-icons/fa6";
export default function MoveSubCategory({ isOpen, setIsOpen,setSuccess,isSuccess }) {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Page Not Found"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      appElement={document.getElementById("root")}
      className="flex items-center justify-center border-none outline-none z-[1000] "
      overlayClassName="fixed inset-0 bg-transparent z-[1000] flex justify-center items-center"
    >
      <div className="bg-[#13131399] w-[490px] px-4 py-4 pb-6 backdrop-blur-[50px]  rounded-[16px] shadow-lg">
        <div className="flex justify-end w-full  items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose className="text-white text-2xl" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img src={MoveIcon} className="w-20" alt="deleteIcon" />
          <h3 className="font-[700] text-[24px]  text-white ">
            Move sub categories
          </h3>
          <p className="font-[400] text-center text-[16px]  text-[#FFFFFF]">
            In order to delete category you need to move sub categories into
            other Main category!
          </p>
          <div onClick={()=>{
            setIsOpen(false)
            setSuccess(!isSuccess)
            }} className="flex bg-[#434343] rounded-[14px] px-4 py-3 w-full mt-2 justify-between gap-2 items-center">
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
            <div>
              <button className="mt-2">
                <FaArrowRightLong color="white" size={20} />
              </button>
            </div>
          </div>
          <div onClick={()=>{
            setIsOpen(false)
            setSuccess(!isSuccess)
            }} className="flex bg-[#434343] rounded-[14px] px-4 py-3 w-full  justify-between gap-2 items-center">
            <div className="flex items-center gap-2">
              <img
                className="me-1.5 inline-block size-6 rounded-full"
                src={music}
                alt="confrence"
              />
              <h3 className="font-[500] text-[16px] text-white">
                Music
              </h3>
            </div>
            <div>
              <button className="mt-2">
                <FaArrowRightLong color="white" size={20} />
              </button>
            </div>
          </div>
          <div onClick={()=>{
            setIsOpen(false)
            setSuccess(!isSuccess)
            }} className="flex bg-[#434343] rounded-[14px] px-4 py-3 w-full  justify-between gap-2 items-center">
            <div className="flex items-center gap-2">
              <img
                className="me-1.5 inline-block size-6 rounded-full"
                src={runIcon}
                alt="confrence"
              />
              <h3 className="font-[500] text-[16px] text-white">
                Social Gatherings
              </h3>
            </div>
            <div>
              <button className="mt-2">
                <FaArrowRightLong color="white" size={20} />
              </button>
            </div>
          </div>
          <div onClick={()=>{
            setIsOpen(false)
            setSuccess(!isSuccess)
            }} className="flex bg-[#434343] rounded-[14px] px-4 py-3 w-full  justify-between gap-2 items-center">
            <div className="flex items-center gap-2">
              <img
                className="me-1.5 inline-block size-6 rounded-full"
                src={otherIcon}
                alt="confrence"
              />
              <h3 className="font-[500] text-[16px] text-white">
                Other
              </h3>
            </div>
            <div>
              <button className="mt-2">
                <FaArrowRightLong color="white" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
