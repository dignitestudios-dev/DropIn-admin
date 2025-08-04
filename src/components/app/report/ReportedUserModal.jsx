import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { person, person2 } from "../../../assets/export";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import { dateFormate } from "../../../lib/helpers";
const ReportedUserModal = ({ isOpen, setIsOpen ,userDetail}) => {
  const navigate = useNavigate("");
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Page Not Found"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      className="flex items-center justify-center border-none outline-none z-[1000] "
      overlayClassName="fixed inset-0 bg-transparent z-[1000] flex justify-center items-center"
    >
      <div className="bg-[#22212199] w-[490px] px-4 py-4 backdrop-blur-[50px]  rounded-[16px] shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="font-[700] text-[24px]  text-white ">Reports</h3>
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose className="text-white text-2xl" />
          </button>
        </div>
        <div
          onClick={() => navigate(`/users/${userDetail?.reportedUser?._id}`, {state:{user:userDetail?.reportedUser}})}
          className="flex justify-between items-center border-b border-[#313131] pb-5"
        >
          <div className="flex items-center gap-3 mt-3 text-white">
            <img
              src={userDetail?.user?.profilePicture}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="text-nowrap font-medium text-[16px]">
                {userDetail?.user?.firstName}
              </span>
              <p className="text-nowrap font-[400] text-[14px]">{userDetail?.type}</p>
            </div>
          </div>
          <button>
            <FaChevronRight size={22} color="white" />
          </button>
        </div>
        <div className="p-2 border-b border-[#313131] pb-5">
          <p className="text-[16px] text-[#959393] font-[400]">Report By</p>
          <div className="flex justify-between gap-8 items-center">
            <div className="flex items-center w-full border-r border-[#313131] gap-3 mt-2 text-white">
              <img
                src={userDetail?.reporter?.profilePicture}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="text-nowrap font-medium text-[16px]">
                  {userDetail?.reporter?.firstName}
                </span>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[16px] text-[#959393] font-[400]">Report By</p>
              <span className="text-[16px] text-white font-[400]">
                {dateFormate(userDetail?.createdAt)}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] text-white font-[400]">Reason</h3>
          <p className="text-[16px] text-white font-[400] mt-2">
            {userDetail?.reason}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ReportedUserModal;
