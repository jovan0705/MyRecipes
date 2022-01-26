import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchClassesDetail } from "../store/actionCreators/classesCreator";

const ClassDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchClassesDetail(id));
  }, []);

  const { classReducer } = useSelector((store) => store);

  return (
    <div className="py-10 h-screen flex justify-center items-center w-2/3 mx-auto">
      <div className="flex-1 rounded-lg mr-10">
        <img src={classReducer.classDetail.image} alt="" />
      </div>
      <div className="flex-1 bg-white h-72 rounded-lg">
        <h1>Class Detail</h1>
        <h3>{classReducer.classDetail.name}</h3>
        <h3>{classReducer.classDetail.price}</h3>
        <button className="btn btn-primary">
          Buy this <class></class>
        </button>
        {/* <h3>{classReducer.classDetail.date.getDate()}</h3> */}
        {/* {JSON.stringify(classReducer.classDetail)} */}
      </div>
    </div>
  );
};

export default ClassDetailPage;
