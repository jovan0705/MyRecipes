import { useState } from "react";
import {
  IoBookmarkOutline,
  IoHeartOutline,
  IoBookmark,
  IoHeart,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import { successAlert } from "../helpers/alerts";
import {
  likeRecipe,
  unlikeRecipe,
} from "../store/actionCreators/recipesCreator";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFavourites } from "../store/actionCreators/favouritesCreator";

const RecipeCard = ({
  id,
  imageUrl,
  name,
  totalCalories,
  userId,
  category,
}) => {
  const [liked, setLiked] = useState(false);
  // const [bookmarked, setBookmarked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  useEffect(() => {
    dispatch(fetchFavourites())
      .then((data) => {
        console.log(data.favoritedRecipes, 'INI DATAA')
        data.favoritedRecipes.forEach(el => {
          if (el.id === id) {
            setLiked(true)
          } 
        })
      })
  }, [])

  const handleLikeButton = (id) => {
    setLiked(true);
    dispatch(likeRecipe(id))
      .then(() => {
        successAlert(`Like ${name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnlikeButton = (id) => {
    setLiked(false);
    dispatch(unlikeRecipe(id))
      .then(() => {
        successAlert(`Unlike ${name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleBookmarkButton = (status) => {
  //   status
  //      successAlert(`Bookmark ${name}`)
  //     : successAlert(`Unbookmark ${name}`);
  //   setBookmarked(status);
  // };
  return (
    <>
      <div className="w-auto h-auto border shadow-md flex gap-2 rounded-md text-gray-400 hover:shadow-xl duration-200 ease-in ">
        <div className="w-1/2 h-52 image overflow-hidden">
          <img
            className="h-full w-full mx-auto rounded-md hover:cursor-pointer"
            src={imageUrl}
            alt={name}
            onClick={() => toDetail(id)}
          />
        </div>
        <div className="w-1/2 py-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex gap-2 py-2 flex-wrap">
              <div className="badge badge-secondary badge-outline">
                {category}
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
            {/* {!bookmarked && (
              <div className="group">
                <button className="text-xl block group-hover:hidden text-secondary ">
                  <IoBookmarkOutline />
                </button>
                <button
                  className="text-xl hidden group-hover:block text-secondary tooltip"
                  data-tip="Bookmark"
                  onClick={() => handleBookmarkButton(true)}
                >
                  <IoBookmark />
                </button>
              </div>
            )}
            {bookmarked && (
              <div>
                <button
                  className="text-xl block text-secondary tooltip"
                  data-tip="Unbookmark"
                  onClick={() => handleBookmarkButton(false)}
                >
                  <IoBookmark />
                </button>
              </div>
            )} */}
            {!liked && (
              <div className="group">
                <button className="text-xl block text-base-content group-hover:hidden">
                  <IoHeartOutline />
                </button>
                <button
                  className="text-xl hidden text-red-600 group-hover:block tooltip"
                  data-tip="Favourite"
                  onClick={() => handleLikeButton(id)}
                >
                  <IoHeart />
                </button>
              </div>
            )}
            {liked && (
              <div>
                <button
                  className="text-xl block text-red-600 tooltip"
                  data-tip="Remove from favourite"
                  onClick={() => handleUnlikeButton(id)}
                >
                  <IoHeart />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
