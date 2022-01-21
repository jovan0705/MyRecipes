import {
  IoHome,
  IoWallet,
  IoBookmark,
  IoChatbubbles,
  IoLogOut,
  IoPerson,
  IoNewspaper,
  IoPersonAddSharp,
  IoAdd,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-1/12 flex flex-col justify-around bg-primary-focus rounded-r-3xl">
      <div className=" flex flex-col">
        <Link to="/home">
          <SidebarIcon icon={<IoHome />} text="Home" />
        </Link>
        <Link to="/recipes">
          <SidebarIcon icon={<IoNewspaper />} text="Recipes" />
        </Link>
        <Link to="/post">
          <SidebarIcon icon={<IoAdd />} text="Post Recipe" />
        </Link>
        <SidebarIcon icon={<IoWallet />} text="Wallet" />
        <SidebarIcon icon={<IoChatbubbles />} text="Forum" />
        <SidebarIcon icon={<IoPersonAddSharp />} text="Add Admin" />
      </div>
      <div className=" flex flex-col">
        <SidebarIcon icon={<IoLogOut />} text="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
