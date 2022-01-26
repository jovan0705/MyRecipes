import TopNavbar from "../components/TopNavbar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserClasses } from "../store/actionCreators/classesCreator";
import ClassCard from "../components/ClassCard";
import EmptyState from "../components/EmptyState";

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
        <h1 className="heading text-center">My Classes</h1>
      </div>

      {userClasses.length === 0 && (
        <div className="w-full h-1/2">
          <EmptyState message="There's no class yet" />
        </div>
      )}

      {userClasses.length > 0 && (
        <div className="grid grid-cols-3 gap-10 p-3">
          {userClasses &&
            userClasses.map(({ Class }) => {
              return (
                <ClassCard
                  key={Class.id}
                  id={Class.id}
                  name={Class.name}
                  image={Class.image}
                  link={Class.link}
                  date={Class.date}
                  page={"myClass"}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default MyClasses;
