import { MdBlock } from "react-icons/md";
import { contact, LogInBg, mail, person, star } from "../../../assets/export";
import { PiChatCircleText } from "react-icons/pi";
import UserDetailReview from "../../../components/app/user/UserDetailReview";
import { useEffect, useState } from "react";
import UserDetailEvent from "../../../components/app/user/UserDetailEvent";
import UserDetailConnection from "../../../components/app/user/UserDetailConnection";
import { useLocation, useNavigate } from "react-router";
import axios from "../../../axios";
export default function UserDetail() {
  const [ActiveTab, setActiveTab] = useState("All");
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = location.state?.user;
  const [user, setUser] = useState(currentUser);
  const [events, setEvents] = useState();
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [type, setType] = useState("All");
  const [reviews, setReviews] = useState();
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [connections, setConnections] = useState();
  const [loadingConnections, setLoadingConnections] = useState(false);
  const [loadingRestrict, setLoadingRestrict] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const getEvents = async () => {
    try {
      setLoadingEvents(true);
      const response = await axios.get(
        `/user/get-user-events?userID=${user._id}&type=${type.toLowerCase()}`,
      );
      setEvents(response?.data?.data.events);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingEvents(false);
    }
  };
  const getReviews = async () => {
    try {
      setLoadingReviews(true);
      const response = await axios.get(
        `/user/get-user-reviews?userID=${user._id}&page=1&limit=10`,
      );
      setReviews(response?.data?.data.eventReviews);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingReviews(false);
    }
  };
  const getConnections = async () => {
    try {
      setLoadingConnections(true);
      const response = await axios.get(
        `/user/get-user-connections?userID=${user._id}&page=1&limit=10`,
      );
      setConnections(response?.data?.data.connections);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingConnections(false);
    }
  };

  const restrictUser = async () => {
    try {
      setLoadingRestrict(true);
      const response = await axios.post(
        `/user/toggle-restrict-user?userID=${user._id}&restricted=${!user.isDeactivatedByAdmin}`,
      );
      if (response?.data?.success) {
        setUser((prev) => ({
          ...prev,
          isDeactivatedByAdmin: !prev.isDeactivatedByAdmin,
        }));
        // Update the user state locally instead of redirecting
      }
      console.log(response, "response");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingRestrict(false);
      setShowConfirm(false); // hide dialog after action
    }
  };

  useEffect(() => {
    getEvents();
  }, [type, user]);
  useEffect(() => {
    getReviews();
    getConnections();
  }, [user]);

  return (
    <div>
      <div className="relative w-[100%] flex justify-center">
        <img
          src={LogInBg}
          alt="LogInBg"
          className="w-full rounded-[15px] mx-auto shadow-2xl object-cover h-[115px]   absolute"
        />
      </div>
      <div className="bg-[#13131399] flex justify-between flex-wrap items-center m-5 mt-16  rounded-[15px] sm:h-[80px] p-3 backdrop-blur-[50px]">
        <div className="flex relative items-end -mt-14 gap-3">
          <img
            src={user.profilePicture}
            className="rounded-full w-[100px] h-[100px] object-cover "
            alt="person"
          />
          <div>
            <h3 className="text-[#FFFFFF] text-[20px] font-[500]">
              {user.firstName || "N/A"}
            </h3>
            <p className="text-[#FFFFFF] text-[14px] font-normal">
              {user.lastName || "N/A"}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mt-3">
            <button
              disabled={loadingRestrict}
              onClick={() => setShowConfirm(true)}
              className={`px-3 h-[30px] rounded-[14px] text-white flex gap-2 items-center justify-center text-[11px] font-normal ${
                user.isDeactivatedByAdmin ? "bg-[#2F7EF7]" : "bg-[#FF3535]"
              }`}
            >
              <MdBlock size={20} />
              {user.isDeactivatedByAdmin ? "UnRestrict" : "Restrict"}
            </button>

            {/* <NavLink to={"/chat"} className="px-3 h-[30px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-[11px] font-normal">
              <PiChatCircleText size={25} /> Chat
            </NavLink> */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden gap-3">
        <div className="lg:col-span-3 lg:row-span-3 bg-[#13131399] backdrop-blur-[50px] rounded-[15px] p-5 ">
          <h3 className="font-[500] text-[20px] text-white">About</h3>
          <span className="font-[300] text-[14px] text-[#A6A6A6]">Bio</span>
          <p className="font-[300] text-[14px] text-[white]">
            {user.biography}
          </p>
          <ul className="mt-3">
            <li className="flex items-center gap-3">
              <img src={mail} className="w-10" alt="mail" />
              <div>
                <p className="font-[300] text-[14px] text-[#A6A6A6] ">Email</p>
                <p className="font-[300] text-[16px] text-[white] ">
                  {user.email || "N/A"}
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 mt-5">
              <img src={contact} className="w-10" alt="mail" />
              <div>
                <p className="font-[300] text-[14px] text-[#A6A6A6] ">Phone</p>
                <p className="font-[300] text-[16px] text-[white] ">
                  {user.phone || "N/A"}
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
              <span className="font-[400] text-[14px] text-[#A6A6A6]">
                {reviews?.length}
              </span>
            </div>
          </div>
          {loadingReviews ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2F7EF7]"></div>
            </div>
          ) : reviews?.length === 0 ? (
            <p className="text-white pt-4 text-[20px] font-[600]">
              No reviews found
            </p>
          ) : (
            reviews?.map((review, index) => (
              <UserDetailReview key={index} review={review} />
            ))
          )}
        </div>
        <div className="lg:col-span-6 lg:row-span-6 lg:col-start-4 lg:row-start-1">
          <div className="flex items-center justify-between">
            <h3 className="font-[500] text-[20px] text-white">Events</h3>
            <ul className="flex items-center gap-3">
              {["All", "Live", "Featured", "Ended", "Canceled"].map(
                (item, i) => (
                  <li
                    className={`text-white cursor-pointer font-[400] text-[14px] ${
                      type == item && "border-b-2 border-[#2F7EF7] "
                    } `}
                    key={i}
                    onClick={() => setType(item)}
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="h-[500px] overflow-y-scroll table-scroller">
            {loadingEvents ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2F7EF7]"></div>
              </div>
            ) : events?.length === 0 ? (
              <p className="text-white text-center pt-4 text-[20px] font-[600]">
                No events found
              </p>
            ) : (
              events?.map((event, index) => (
                <UserDetailEvent key={index} event={event} />
              ))
            )}
          </div>
        </div>
        <div className="lg:col-span-3 lg:row-span-6 p-3 lg:col-start-10 lg:row-start-1 bg-[#13131399] backdrop-blur-[50px] rounded-[15px]">
          <h3 className="font-[500] text-[20px] text-white mb-3">
            Connections
          </h3>
          {loadingConnections ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2F7EF7]"></div>
            </div>
          ) : connections?.length === 0 ? (
            <p className="text-white pt-4 text-[20px] font-[600]">
              No connections found
            </p>
          ) : (
            connections?.map((connection, index) => (
              <UserDetailConnection key={index} connection={connection} />
            ))
          )}
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1E1E1E] p-5 rounded-[15px] w-[300px] text-white">
            <h4 className="font-semibold text-lg mb-3">Confirm Action</h4>
            <p className="text-[12px] mb-5">
              Are you sure you want to{" "}
              {user.isDeactivatedByAdmin ? "UnRestrict" : "Restrict"} this user?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-3 py-1 rounded-[10px] bg-gray-500 text-white text-[12px]"
              >
                Cancel
              </button>
              <button
                onClick={restrictUser}
                disabled={loadingRestrict}
                className={`px-3 py-1 rounded-[10px] text-white text-[12px] ${
                  user.isDeactivatedByAdmin ? "bg-[#2F7EF7]" : "bg-[#FF3535]"
                }`}
              >
                {loadingRestrict ? "Processing..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
