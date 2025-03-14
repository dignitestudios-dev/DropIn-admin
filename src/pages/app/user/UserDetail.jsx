import { MdBlock } from "react-icons/md";
import { contact, LogInBg, mail, person, star } from "../../../assets/export";
import { PiChatCircleText } from "react-icons/pi";
import UserDetailReview from "../../../components/app/User/UserDetailReview";
import { useState } from "react";
import UserDetailEvent from "../../../components/app/User/UserDetailEvent";
import UserDetailConnection from "../../../components/app/User/UserDetailConnection";
import { NavLink } from "react-router";
export default function UserDetail() {
  const [ActiveTab, setActiveTab] = useState("All");
  return (
    <div>
      <div className="relative w-[100%] flex justify-center">
        <img
          src={LogInBg}
          alt="LogInBg"
          className="w-full rounded-[15px] mx-auto shadow-2xl object-cover h-[115px]   absolute"
        />
      </div>
      <div className="bg-[#13131399] flex justify-between items-center m-5 mt-16  rounded-[15px] h-[80px] p-3 backdrop-blur-[50px]">
        <div className="flex relative items-end -mt-14 gap-3">
          <img
            src={person}
            className="rounded-full w-[100px] object-cover "
            alt="person"
          />
          <div>
            <h3 className="text-[#FFFFFF] text-[20px] font-[500]">
              Mike Smith
            </h3>
            <p className="text-[#FFFFFF] text-[14px] font-normal">@mikesmith</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mt-3">
            <button className="px-3 h-[30px] rounded-[14px] bg-[#FF3535] text-white flex gap-2 items-center justify-center text-[11px] font-normal ">
              <MdBlock size={25} /> Restrict
            </button>
            <NavLink to={"/chat"} className="px-3 h-[30px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-[11px] font-normal">
              <PiChatCircleText size={25} /> Chat
            </NavLink>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-6 gap-3">
        <div className="lg:col-span-3 lg:row-span-3 bg-[#13131399] backdrop-blur-[50px] rounded-[15px] p-5 ">
          <h3 className="font-[500] text-[20px] text-white">About</h3>
          <span className="font-[300] text-[14px] text-[#A6A6A6]">Bio</span>
          <p className="font-[300] text-[14px] text-[white]">
            Lorem ipsum dolor sit amet consectetur. Nullam ips um ornare
            interdum sit. Sed arcu at habitant cons equat .
          </p>
          <ul className="mt-3">
            <li className="flex items-center gap-3">
              <img src={mail} className="w-10" alt="mail" />
              <div>
                <p className="font-[300] text-[14px] text-[#A6A6A6] ">Email</p>
                <p className="font-[300] text-[16px] text-[white] ">
                  mikesmith@gmail.com
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 mt-5">
              <img src={contact} className="w-10" alt="mail" />
              <div>
                <p className="font-[300] text-[14px] text-[#A6A6A6] ">Phone</p>
                <p className="font-[300] text-[16px] text-[white] ">
                  +1 123 456 7890
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 lg:row-span-3 lg:col-start-1 lg:row-start-4 h-[300px] overflow-auto table-scroller py-5 bg-[#13131399] backdrop-blur-[50px] rounded-[15px] p-3">
          <div className="flex items-center gap-3">
            <h3 className="font-[500] text-[20px] text-white ">Reviews</h3>
            <div className="flex items-center gap-1">
              <img src={star} className="w-4" alt="review star" />
              <span className="font-[400] text-[14px] text-[#A6A6A6]">24</span>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6].map(($) => (
            <UserDetailReview key={$} />
          ))}
        </div>
        <div className="lg:col-span-6 lg:row-span-2 lg:col-start-4 lg:row-start-1">
          <div className="flex items-center justify-between">
            <h3 className="font-[500] text-[20px] text-white">Events</h3>
            <ul className="flex items-center gap-3">
              {["All", "Featured", "Live", "Cancelled"].map((item, i) => (
                <li
                  className={`text-white cursor-pointer font-[400] text-[14px] ${
                    ActiveTab == item && "border-b-2 border-[#2F7EF7] "
                  } `}
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <UserDetailEvent />
        </div>
        <div className="lg:col-span-3 lg:row-span-6 p-3 lg:col-start-10 lg:row-start-1 bg-[#13131399] backdrop-blur-[50px] rounded-[15px]">
          <h3 className="font-[500] text-[20px] text-white mb-3">Connections</h3>
          <UserDetailConnection/>
        </div>
      </div>
    </div>
  );
}
