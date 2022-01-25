import React, { useState, useEffect } from 'react';

function Chat({socket, username, room}) {
    const [currentMsg, setCurrentMsg] = useState();
    const [messageList, setMessageList] = useState([]);

    const sendMsg = async () => {
        if(currentMsg !== "") {
            const msgData = {
                room: room,
                author: username,
                message: currentMsg,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }
            await socket.emit("send_msg", msgData);
            setMessageList((list) => [...list, msgData]);
            setCurrentMsg("");
        }
    }

    useEffect(() => {
        socket.on("get_msg", (data) => {
            console.log(data);
            setMessageList((list) => [...list, data]);
        })
    }, [socket]);

    return (
    <div className="chat-window">
    <div className="chat-header">
        <p>Live Chat</p>
    </div>
    <div className="chat-body">
            {messageList.map((messageContent) => {
            return (
                <div
                    className="message"
                    id={username === messageContent.author ? "you" : "other"}
                    >
                    <div>
                    <div className="message-content">
                        <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.author}</p>
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

export default Chat;
