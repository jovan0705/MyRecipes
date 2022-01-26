import { Link, Outlet } from "react-router-dom";

const ForumPage = () => {
  return (
    <div className="h-screen w-full flex py-10">
      <div className="flex-1 flex justify-center items-center border border-red-600">
        <div className="flex flex-col gap-10">
          <Link to="chatPro" className="btn btn-primary">
            PRO CHEF
          </Link>
          <Link to="chatAmt" className="btn btn-primary">
            AMATEUR CHEF
          </Link>
          <Link to="homeCook" className="btn btn-primary">
            HOME COOK
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center border border-blue-600">
        <Outlet />
      </div>
    </div>
  );
};

export default ForumPage;
