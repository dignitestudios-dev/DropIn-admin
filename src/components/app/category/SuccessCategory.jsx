import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { deleteIcon, successCateg } from "../../../assets/export";
export default function SuccessCategory({ isOpen, setIsOpen }) {
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
      <div className="bg-[#13131399] w-[440px] px-4 py-4 pb-8 backdrop-blur-[50px]  rounded-[16px] shadow-lg">
        <div className="flex justify-end w-full  items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose className="text-white text-2xl" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={successCateg} className="w-20" alt="deleteIcon" />
          <h3 className="font-[700] text-[24px]  text-white ">
            Categories Moved
          </h3>
          <p className="font-[400] text-[16px]  text-[#FFFFFF]">
            Sub categories are moved into the new category
          </p>
        </div>
      </div>
    </Modal>
  );
}
