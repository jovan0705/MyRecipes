// import { useParams } from "react-router-dom";

// const ForumChat = () => {
//   let { region } = useParams();

//   return <div>{region}</div>;
// };

// export default ForumChat;
import { IoSend } from "react-icons/io5";

import React, { useState, useEffect } from "react";
import { socket } from "../../apis/socket";

function ForumChatTwo() {
  // console.log(socket, 'SOCKET');
  const [currentMsg, setCurrentMsg] = useState();
  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("username"));
  // setUsername(localStorage.getItem('username'))

  const sendMsg = async () => {
    if (currentMsg !== "") {
      const msgData = {
        username: username,
        message: currentMsg.trim(),
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_msg_amateur", msgData);
      // setMessageList((list) => [msgData]);
      setCurrentMsg("");
    }
  };

  useEffect(() => {
    socket.on("get_msg_amateur", (data) => {
      setMessageList((el) => [...el, data]);
    });
  }, [socket]);

  return (
    <div className="socket-container chat-window">
      <div className="socket-header">
        <p>AMATEUR CHEF</p>
      </div>
      <div className="socket-body chat-body">
        {messageList.map((msg) => {
          return (
            <div
              className="message"
              // className={username === msg.username ? 'text-right bg-amber-200' : 'text-left bg-amber-500'}
              id={username === msg.username ? "you" : "other"}
              key={msg.username}
            >
              <div>
                <div className="message-meta">
                  <p id="author">@{msg.username}</p>
                </div>
                <div className="message-content shadow-xl">
                  <p>{msg.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="socket-footer">
        <input
          className="socket-input"
          type="text"
          value={currentMsg}
          placeholder="Hey..."
          onChange={(e) => {
            setCurrentMsg(e.target.value);
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMsg();
          }}
        />
        <div className="socket-send-message">
          <button onClick={sendMsg}>
            <IoSend size="30" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForumChatTwo;
