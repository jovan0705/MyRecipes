import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Container = () => {
  return (
    <div className="flex">
      <div className="w-1/12 bg-zinc-50">
        <Sidebar />
      </div>
      <div className="w-11/12 pr-10 pl-10 bg-zinc-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
