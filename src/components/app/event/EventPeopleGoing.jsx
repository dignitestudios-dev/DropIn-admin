import { person } from "../../../assets/export";
import { useNavigate } from "react-router";

export default function EventPeopleGoing() {
  const navigate=useNavigate("");
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/user/1")}>
      <img src={person} className="w-10" alt="Person" />
      <h3 className="font-[500] text-[14px] text-white">User Name</h3>
    </div>
  );
}
