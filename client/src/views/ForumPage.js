import { Link, Outlet } from "react-router-dom";
import { useState } from 'react';
import ForumChat from '../components/socket/ForumChat';
import ForumChatTwo from '../components/socket/ForumChatTwo';
import ForumChatThree from '../components/socket/ForumChatThree';

const ForumPage = () => {
  const [showChat, setShowChat] = useState('pro');
  const joinRoom = (room) => {
      setShowChat(room);
  }

  return (
    <div className="grid grid-col-1 h-screen w-full flex py-10 bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex justify-center mb-2">
        <div className="flex flex-nowrap">
          {/* <div className="bg-primary text-xl">
            <p>Forum Chat</p>
          </div> */}
          {/* <Link to="chatPro" className="btn btn-primary w-72 text-xl">
            PRO CHEF
          </Link>
          <Link to="chatAmt" className="btn btn-primary w-72 text-xl">
            AMATEUR CHEF
          </Link>
          <Link to="homeCook" className="btn btn-primary w-72 text-xl">
            HOME COOK
          </Link> */}
          <button className="btn btn-primary w-72 text-xl" onClick={() => joinRoom('pro')}>PRO CHEF</button>
          <button className="btn btn-primary w-72 text-xl" onClick={() => joinRoom('amateur')}>AMATEUR CHEF</button>
          <button className="btn btn-primary w-72 text-xl" onClick={() => joinRoom('homeCook')}>HOME COOK</button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {showChat === 'pro' ? (<ForumChat />) 
        : showChat === 'amateur' ? (<ForumChatTwo />) 
        : (<ForumChatThree />)
        }
      </div>
    </div>
  );
};

export default ForumPage;
