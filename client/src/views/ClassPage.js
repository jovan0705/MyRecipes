import ClassCard from "../components/ClassCard";
import Lottie from "react-lottie-player";
import lottieJson from "../animation/lottie/recipe-class.json";

const ClassPage = () => {
  return (
    <div>
      <h1 className="heading text-center">MyRecipe Class</h1>
      <div>
        <Lottie
          className="w-1/2 h-1/2 mx-auto"
          loop
          animationData={lottieJson}
          play
        />
      </div>
      <div className="grid grid-cols-2">
        <ClassCard />
      </div>
    </div>
  );
};

export default ClassPage;
