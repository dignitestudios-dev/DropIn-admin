import UserList from "../../../components/app/user/UserList";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import UserListSkeleton from "../../../components/app/user/UserListSkeleton";
import { useNavigate } from "react-router";
export default function User() {
  const [userList,setUserList]=useState([])
  const [pagnition,setPagnition]=useState({})
  const [loading,setLoading]=useState(false)
  const [pageNo,setPageNo]=useState(1)
  
  const getUsers=async()=>{
    try {
      setLoading(true)
      const response=await axios.get(`/user/get-all-users?page=${pageNo}&limit=10`)
      setUserList(response?.data?.data.users)
      setPagnition(response?.data?.pagination)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getUsers()
  },[pageNo])

  return (
    <div  >
      <h3 className="font-[500] text-[28px] text-white">Users</h3>

      {loading ? <UserListSkeleton/> : <UserList userList={userList} pagnition={pagnition} setPageNo={setPageNo}/>}
    </div>
  );
}
