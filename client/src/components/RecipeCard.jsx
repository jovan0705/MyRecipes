import {
  IoBookmarkOutline,
  IoHeartOutline,
  IoBookmark,
  IoHeart,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const RecipeCard = ({ id, imageUrl, name, totalCalories, userId }) => {
  const navigate = useNavigate();
  const toDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <div className="w-auto h-auto border shadow-md flex gap-2 rounded-md text-gray-400 hover:shadow-xl duration-200 ease-in ">
        <div className="w-1/2 h-52 image overflow-hidden">
          <img
            className="h-full w-full mx-auto rounded-md hover:cursor-pointer"
            src={imageUrl}
            alt={name}
            onClick={toDetail}
          />
        </div>
        <div className="w-1/2 py-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex gap-2 py-2 flex-wrap">
              <div className="badge badge-secondary badge-outline">
                Category
              </div>
              <div className="badge badge-accent badge-outline">
                {totalCalories} cal
              </div>
            </div>
            <div className="">
              <h3 className="font-bold text-xl">{name}</h3>
            </div>
            <div className="rating rating-sm">
              <Rating />
            </div>
          </div>
          <div className="">
            <p className="text-xs">
              Posted by <span className="font-bold">{userId}</span>
            </p>
          </div>
          <div className="flex flex-row-reverse gap-3 py-2 px-5">
            <div className="group">
              <button className="text-xl block group-hover:hidden text-secondary ">
                <IoBookmarkOutline />
              </button>
              <button className="text-xl hidden group-hover:block text-secondary">
                <IoBookmark />
              </button>
            </div>
            <div className="group">
              <button className="text-xl block text-base-content group-hover:hidden">
                <IoHeartOutline />
              </button>
              <button className="text-xl hidden text-red-600 group-hover:block">
                <IoHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
