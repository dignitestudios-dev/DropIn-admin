import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { deleteIcon } from "../../../assets/export";
export default function DeleteModal({
  isOpen,
  setIsOpen,
  moveSubCateg,
  setMoveSubCateg,
}) {
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
          <img src={deleteIcon} className="w-20" alt="deleteIcon" />
          <h3 className="font-[700] text-[24px]  text-white ">
            Delete category
          </h3>
          <p className="font-[400] text-[16px]  text-[#FFFFFF]">
            Are you sure you want to delete this category?
          </p>
          <div className="flex justify-center gap-2 items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setMoveSubCateg(!moveSubCateg);
              }}
              className="bg-[#434343]  text-[white] rounded-[14px] p-3 px-8 font-[400] text-[14px] "
            >
              Delete
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#2F7EF7] text-[white] rounded-[14px] p-3 px-8 font-[400] text-[14px] "
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
