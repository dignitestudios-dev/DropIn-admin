import {
  coverPhoto,
} from "../../../assets/export";
import EventDetailHeader from "../../../components/app/event/EventDetailHeader";
import { MdEventSeat } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import EventPeopleGoing from "../../../components/app/event/EventPeopleGoing";
export default function EventDetail() {
  return (
    <div>
      <div className="relative w-[100%] flex justify-center">
        <img
          src={coverPhoto}
          alt="LogInBg"
          className="w-full rounded-[15px] mx-auto shadow-2xl object-cover h-[197px]   absolute"
        />
      </div>
      <EventDetailHeader />

      <div className="grid grid-cols-1 lg:grid-cols-6 grid-rows-1 lg:grid-rows-6 gap-4">
        <div className="col-span-12  lg:h-auto lg:col-span-2 row-start-2 h-[100px] sm:-[auto] lg:row-span-1 flex items-center gap-3 bg-[#13131399] backdrop-blur-[50] p-5 rounded-[15px] shadow-lg">
          <div className="w-[48px] h-[48px] rounded-[9px] overflow-hidden">
            <div className="bg-[#2F7EF7] text-center text-white  font-[400] text-[11px]">
              Feb
            </div>
            <div className="h-[70%] text-center bg-[#434343] text-[20px] font-[] text-white">
              20
            </div>
          </div>
          <div>
            <p className="text-white font-[400] text-[13px]  ">
              Thursday, February 2025{" "}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-2">
                <FaClock color="#2F7EF7" />
                <p className="text-white font-[400] text-[11px]  ">
                  08:00pm-12am
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MdEventSeat color="#2F7EF7" />
                <p className="text-white font-[400] text-[11px]  ">343/500</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12  lg:col-span-2 row-span-2 lg:row-span-5 row-start-3 lg:col-start-1 lg:row-start-2 bg-[#13131399] backdrop-blur-[50] p-5 rounded-[15px] shadow-lg ">
          <div className="flex items-center justify-between">
            <h3 className="text-[20px] text-white font-[400]">People Going</h3>
            <p className="text-[13px] font-[300] text-white">324/500</p>
          </div>
          <div className="mt-2 h-[300px] overflow-auto">
            <EventPeopleGoing />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 row-span-1 row-start-1 lg:row-span-3 lg:col-start-3 lg:row-start-1 bg-[#13131399] backdrop-blur-[50] p-5 rounded-[15px] shadow-lg">
          <h3 className="text-[20px] text-white font-[500]">Event Details</h3>
          <p className="text-white font-[400] text-[14px] mt-3">
            The recent Xbox E3 event was nothing short of a thrilling spectacle
            for gamers worldwide! It presented a stunning lineup of new games
            and groundbreaking features that left attendees buzzing with
            excitement. This year's showcase was particularly extraordinary,
            overflowing with exclusive trailers and detailed gameplay previews
            that truly showcased the power of the Xbox Series X. Among the
            highlights were the eagerly awaited titles "Cyber Quest" and
            "Enchanted Realms," both of which are set to transform the gaming
            landscape with their immersive storytelling and stunning visuals.
            The atmosphere at the venue was electric, with fans fervently
            discussing their favorite announcements, exchanging theories, and
            sharing their excitement across various social media platforms. The
            Xbox E3 event undeniably reinforced the brand's dedication to
            providing unforgettable experiences for gamers, making it an
            essential event for anyone involved in the gaming community.
          </p>
        </div>
      </div>
    </div>
  );
}
