import { Link, Outlet } from "react-router-dom";

const ForumPage = () => {
  return (
    <div className="h-screen w-full flex py-10">
      <div className="flex-1 flex justify-center items-center border border-red-600">
        <div className="flex flex-col gap-10">
          <Link to="jakarta" className="btn btn-primary">
            Jakarta
          </Link>
          <Link to="bandung" className="btn btn-primary">
            Bandung
          </Link>
          <Link to="surabaya" className="btn btn-primary">
            Surabaya
          </Link>
          <Link to="yogyakarta" className="btn btn-primary">
            Yogyakarta
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
