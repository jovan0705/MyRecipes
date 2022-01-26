import lottieJson from "../animation/lottie/empty-state.json";
import Lottie from "react-lottie-player";

const EmptyState = ({ message }) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <Lottie
          className="w-1/3 h-1/3 mx-auto"
          loop
          animationData={lottieJson}
          play
        />
        <h1 className="text-center font-semibold text-xl">{message}</h1>
      </div>
    </div>
  );
};

export default EmptyState;
