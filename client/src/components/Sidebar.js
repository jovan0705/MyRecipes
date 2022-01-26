import {
  IoHome,
  IoWallet,
  IoChatbubbles,
  IoLogOut,
  IoNewspaper,
  IoAdd,
  IoVideocam,
  IoFastFood,
  IoPeopleSharp,
} from "react-icons/io5";
import { IoIosImages } from "react-icons/io";
import { Link } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { successAlert } from "../helpers/alerts";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    Swal.fire({
      title: "Leaving Already",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        event.preventDefault();
        localStorage.removeItem("access_token");
        navigate("/login");
        successAlert("You have been logged out");
      }
    });
  };
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
        <Link to="/categories">
          <SidebarIcon icon={<IoFastFood />} text="Categories" />
        </Link>
        <Link to="/forum">
          <SidebarIcon icon={<IoChatbubbles />} text="Forum" />
        </Link>
        <Link to="/classes">
          <SidebarIcon icon={<IoVideocam />} text="Classes" />
        </Link>
        <Link to="/users">
          <SidebarIcon icon={<IoPeopleSharp />} text="Users" />
        </Link>
        <Link to="/feeds">
          <SidebarIcon icon={<IoNewspaper />} text="Feeds" />
        </Link>
        {/* <SidebarIcon icon={<IoPersonAddSharp />} text="Add Admin" /> */}
      </div>
      <div className=" flex flex-col" onClick={(event) => logout(event)}>
        <SidebarIcon icon={<IoLogOut />} text="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
