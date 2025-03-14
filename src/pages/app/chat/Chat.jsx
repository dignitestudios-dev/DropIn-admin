import { useState } from "react";
import { person } from "../../../assets/export";
import ChatUser from "../../../components/app/chat/ChatUser";
import ChatMessage from "../../../components/app/chat/ChatMessage";
import { IoSend } from "react-icons/io5";

const Chat = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="h-[calc(100%-4.5rem)]">
      <h3 className="font-[500] text-[28px] text-white">Chat</h3>
      <div className="grid grid-cols-12 h-full gap-5 mt-3">
        {/* Left Sidebar */}
        <div className="col-span-4">
          <ChatUser
            activeChat={activeChat}
            setActiveChat={setActiveChat}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />{" "}
        </div>

        {/* Right Chat Area */}
        <div className="flex-1 bg-[#13131399] backdrop-blur-[50px] rounded-[15px] col-span-8 flex flex-col shadow-lg overflow-hidden">
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 bg-[#13131399] backdrop-blur-[50px] ">
                <div className="flex items-center">
                  <div className="h-12 w-12">
                    <img src={person} alt={person} className="rounded-full" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-lg text-white">John Doe</h3>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <ChatMessage
                  sender={true}
                  content="Hey, how are you?"
                  time="10:30 AM"
                  avatar={person}
                  name="You"
                />
                <ChatMessage
                  sender={false}
                  content="I'm good! Thanks for asking. How about you?"
                  time="10:31 AM"
                  avatar={person}
                  name={"John Doe"}
                />
              </div>

              {/* Message Input */}
              <div className="bg-[#0E0E0E] rounded-[16px] p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type Message "
                    className="flex-1 border px-4 text-[12px] font-[400] text-white border-[#F4F4F480] h-[40px] rounded-[14px] bg-transparent"
                  />
                  <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white  hover:bg-blue-600">
                    <IoSend size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-white">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
