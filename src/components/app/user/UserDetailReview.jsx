import { star, unfilStar } from "../../../assets/export";
import { dateFormate } from "../../../lib/helpers";

export default function UserDetailReview({review}) {
    console.log(review,"review111")
  return (
    <div className="bg-[#0E0E0E] rounded-[15px] mt-4 p-3 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {Array.from({ length: review?.rating }, (_, index) => (
            <img key={index} src={star} className="w-6" alt="Review" />
          ))}
          {Array.from({ length: 5 - review?.rating }, (_, index) => (
            <img key={index} src={unfilStar} className="w-6" alt="Review" />
          ))}
        </div>
        <div>
          <span className="font-[300] text-[11px] text-[#A6A6A6]">{dateFormate(review?.createdAt)}</span>
        </div>
      </div>
      <p className="font-[400] text-[12px] mt-3 text-[white]">
        {review?.description}
      </p>
      <div className="mt-3 flex items-center gap-3" >
        <img src={review?.user?.profilePicture} className="rounded-full w-8 h-8" alt="person" />
        <h3 className="font-[500] text-[12px] text-[white]" >{review?.user?.firstName}</h3>
      </div>
    </div>
  );
}
