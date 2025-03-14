import { person, star, unfilStar } from "../../../assets/export";

export default function UserDetailReview() {
  return (
    <div className="bg-[#0E0E0E] rounded-[15px] mt-4 p-3 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={star} className="w-6" alt="Review" />
          <img src={star} className="w-6" alt="Review" />
          <img src={star} className="w-6" alt="Review" />
          <img src={star} className="w-6" alt="Review" />
          <img src={unfilStar} className="w-6" alt="Review" />
        </div>
        <div>
          <span className="font-[300] text-[11px] text-[#A6A6A6]">21 Feb</span>
        </div>
      </div>
      <p className="font-[400] text-[12px] mt-3 text-[white]">
        Amazing Show. I booked on Monday and I got. I’m highly impressed with
        their services. Highly recommended!
      </p>
      <div className="mt-3 flex items-center gap-3" >
        <img src={person} className="rounded-full w-8 h-8" alt="person" />
        <h3 className="font-[500] text-[12px] text-[white]" >Mike Smith</h3>
      </div>
    </div>
  );
}
