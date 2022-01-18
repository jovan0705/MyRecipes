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
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-1/12 flex flex-col justify-around bg-primary-focus rounded-r-xl">
      <div className=" flex flex-col">
        <SidebarIcon icon={<IoHome size="18" />} text="Home" />
        <SidebarIcon icon={<IoNewspaper size="18" />} text="Recipes" />
        <SidebarIcon icon={<IoAdd size="18" />} text="Post Recipe" />
        <SidebarIcon icon={<IoBookmark size="18" />} text="Bookmarks" />
        <SidebarIcon icon={<IoWallet size="18" />} text="Wallet" />
        <SidebarIcon icon={<IoChatbubbles size="18" />} text="Forum" />
        <SidebarIcon icon={<IoPerson size="18" />} text="My Profile" />
        <SidebarIcon icon={<IoPersonAddSharp size="18" />} text="Add Admin" />
      </div>
      <div className=" flex flex-col">
        <SidebarIcon icon={<IoLogOut size="18" />} text="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
