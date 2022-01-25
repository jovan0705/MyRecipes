// import { useParams } from "react-router-dom";

// const ForumChat = () => {
//   let { region } = useParams();

//   return <div>{region}</div>;
// };

// export default ForumChat;

import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5000")

function ForumChat() {
  // console.log(socket, 'SOCKET');
    const [currentMsg, setCurrentMsg] = useState();
    const [messageList, setMessageList] = useState([]);
    const [username, setUsername] = useState(localStorage.getItem('username'));
    // setUsername(localStorage.getItem('username'))

    const sendMsg = async () => {

        if(currentMsg !== "") {
            const msgData = {
                username: username,
                message: currentMsg.trim(),
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }
            await socket.emit("send_msg_pro", msgData);
            // setMessageList((list) => [msgData]);
            setCurrentMsg("");
        }
    }

    useEffect(() => {
        socket.on("get_msg_pro", (data) => {
            console.log(data, 'DATA GET MSG');
            setMessageList((list) => [...list, data]);
            console.log(messageList, 'MSG LIST');
        })
    }, [socket]);

    return (
    <div className="chat-window">
    <div className="chat-header">
        <p>Live Chat</p>
    </div>
    <div className="chat-body">
            {messageList.map((msg) => {
            return (
                <div
                    className="message"
                    id={username === msg.username ? "you" : "other"}
                    >
                    <div>
                    <div className="message-content">
                        <p>{msg.message}</p>
                    </div>
                    <div className="message-meta">
                        <p id="time">{msg.time}</p>
                        <p id="author">{msg.username}</p>
                    </div>
                    </div>
                </div>
                );
            })}
    </div>
    <div className="chat-footer">
        <input
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
            <button onClick={sendMsg}>&#9658;</button>
        </div>
    </div>
    )
}

export default ForumChat;
