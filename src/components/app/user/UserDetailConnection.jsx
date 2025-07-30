import { useNavigate } from "react-router";

export default function UserDetailConnection({connection}) {
  console.log(connection,"connection")
  const navigate=useNavigate("");
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate(`/user/${connection?._id}`,{state:{user:connection}})} >
        <img src={connection?.profilePicture} className="w-14 h-12 rounded-[15px]" alt="Person" />
        <h3 className="font-[500] text-[14px] text-white" >{connection?.firstName}{connection?.lastName}</h3>
    </div>
  )
}
