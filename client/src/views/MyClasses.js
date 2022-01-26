import TopNavbar from "../components/TopNavbar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserClasses } from "../store/actionCreators/classesCreator";

const MyClasses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserClasses());
  }, []);
  return (
    <div className="h-screen py-10">
      <TopNavbar />
      <div>
        <h1 className="heading">My Classes</h1>
      </div>
      <div></div>
    </div>
  );
};

export default MyClasses;
