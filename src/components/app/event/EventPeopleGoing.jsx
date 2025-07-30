import { person } from "../../../assets/export";
import { useNavigate } from "react-router";

export default function EventPeopleGoing({peopleGoing}) {
  const navigate=useNavigate("");
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/user/1")}>
      <img src={peopleGoing?.profilePicture} className="w-10 h-10 rounded-full" alt="Person" />
      <h3 className="font-[500] text-[14px] text-white">{peopleGoing?.firstName}{peopleGoing?.lastName}</h3>
    </div>
  );
}
