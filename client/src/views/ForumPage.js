import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import ForumChat from "../components/socket/ForumChat";
import ForumChatTwo from "../components/socket/ForumChatTwo";
import ForumChatThree from "../components/socket/ForumChatThree";

const ForumPage = () => {
  const [showChat, setShowChat] = useState("pro");
  const joinRoom = (room) => {
    setShowChat(room);
  };

  return (
    <div className="h-screen w-full py-10">
      <div className="w-1/2 mx-auto">
        <div className="flex gap-10 justify-around mb-10">
          <button
            className="btn btn-primary text-xl"
            onClick={() => joinRoom("pro")}
          >
            PRO CHEF
          </button>
          <button
            className="btn btn-primary text-xl"
            onClick={() => joinRoom("amateur")}
          >
            AMATEUR CHEF
          </button>
          <button
            className="btn btn-primary text-xl"
            onClick={() => joinRoom("homeCook")}
          >
            HOME COOK
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          {showChat === "pro" ? (
            <ForumChat />
          ) : showChat === "amateur" ? (
            <ForumChatTwo />
          ) : (
            <ForumChatThree />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
