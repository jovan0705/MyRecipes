import TopNavbar from "../components/TopNavbar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserClasses } from "../store/actionCreators/classesCreator";
import ClassCard from "../components/ClassCard";


const MyClasses = () => {
  const dispatch = useDispatch();
  const { userClasses } = useSelector((store) => store.classReducer);

  useEffect(() => {
    dispatch(fetchUserClasses());
  }, []);

  return (
    <div className="h-screen py-10">
      <TopNavbar />
      <div>
        <h1 className="heading">My Classes</h1>
      </div>
      <div className="grid grid-cols-3 gap-10 p-3">
            {userClasses && userClasses.map(({ Class }) => {
              return (
                <ClassCard key={Class.id} id={Class.id} name={Class.name} image={Class.image} link={Class.link} date={Class.date} page={'myClass'}/>
              )
            })}
      </div>
    </div>
  );
};

export default MyClasses;
