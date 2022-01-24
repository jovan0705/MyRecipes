// Components
import ClassCard from "../components/ClassCard";
import Lottie from "react-lottie-player";

//Animation
import lottieJson from "../animation/lottie/recipe-class.json";

// React
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Store
import { fetchClasses } from "../store/actionCreators/classesCreator";
import ClassCardLoading from "../components/ClassCardLoading";
import InternalServerError from "../components/InternalServerError";

const ClassPage = () => {
  const dispatch = useDispatch();
  const { classReducer } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchClasses());
  }, []);

  return (
    <div className="pt-10 pb-10">
      <h1 className="heading text-center">MyRecipe Class</h1>
      <div>
        <Lottie
          className="w-1/2 h-1/2 mx-auto"
          loop
          animationData={lottieJson}
          play
        />
      </div>
      {classReducer.classes && (
        <div className="grid grid-cols-2 gap-10">
          {classReducer.classes.map(({ id, name, image }) => {
            return <ClassCard key={id} id={id} name={name} image={image} />;
          })}
        </div>
      )}
      {classReducer.classesLoading && (
        <div className="grid grid-cols-2 gap-10">
          <ClassCardLoading />
          <ClassCardLoading />
          <ClassCardLoading />
          <ClassCardLoading />
        </div>
      )}
      {classReducer.classesError && <InternalServerError />}
    </div>
  );
};

export default ClassPage;
