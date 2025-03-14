import { useNavigate } from "react-router";
import { person } from "../../../assets/export";

export default function UserDetailConnection() {
  const navigate=useNavigate("");
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/event/1")} >
        <img src={person} className="w-10" alt="Person" />
        <h3 className="font-[500] text-[14px] text-white" >User Name</h3>
    </div>
  )
}
