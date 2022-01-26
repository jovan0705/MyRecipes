import IngredientList from "../components/IngredientList";
import MethodsList from "../components/MethodsList";
import { IoStarOutline } from "react-icons/io5";
import Rating from "../components/Rating";
import ReviewList from "../components/ReviewList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchRecipe } from "../store/actionCreators/recipeDetailCreator";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipeDetailReducer } = useSelector((store) => store);
  const [rating, setRating] = useState(0);

  const handleRating = (num) => {
    setRating(num);
  };

  useEffect(() => {
    dispatch(fetchRecipe(id));
  }, []);
  return (
    <div className="py-10">
      <div className="text-gray-700 body-font border shadow-lg py-10">
        <div className="container mx-auto">
          {recipeDetailReducer.recipe.hasOwnProperty("recipe") && (
            <div className="mx-auto h-auto flex">
              <div>
                <img
                  alt="ecommerce"
                  className="w-full object-cover object-center rounded border border-gray-200 h-96 "
                  src={recipeDetailReducer.recipe.recipe.imageUrl}
                />
              </div>
              <div className="w-full mt-6 px-5 space-y-3 pb-7 rounded-md">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {recipeDetailReducer.recipe.recipe.name}
                </h1>
                <div className="flex mb-4">
                  <div className="rating rating-sm">
                    <Rating />
                  </div>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </div>
                <hr className="" />
                <p className="leading-relaxed">
                  {recipeDetailReducer.recipe.recipe.steps}
                </p>
                <div className="flex flex-col mt-6 gap-5">
                  {/* ingredient start */}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg title-font text-gray-500 tracking-widest">
                      Ingredient
                    </h2>
                    <div className="ml-4">
                      {recipeDetailReducer.recipe.ingredients.map(
                        (ingredient) => {
                          return (
                            <IngredientList
                              key={ingredient}
                              name={ingredient}
                            />
                          );
                        }
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      for="my-modal-2"
                      class="btn btn-primary modal-button"
                    >
                      open modal
                    </label>
                    <input
                      type="checkbox"
                      id="my-modal-2"
                      class="modal-toggle"
                    />
                    <div class="modal">
                      <div class="modal-box">
                        <div class="rating">
                          <input
                            type="radio"
                            name="rating-2"
                            checked="checked"
                            class="mask mask-star-2 bg-warning"
                            onChange={() => handleRating(1)}
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-warning"
                            onChange={() => handleRating(2)}
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-warning"
                            onChange={() => handleRating(3)}
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-warning"
                            // onChange={() => handleRating(4)}
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-warning"
                            // onChange={() => handleRating(5)}
                          />
                        </div>

                        <p>Rating: {rating} </p>

                        <div class="modal-action">
                          <label for="my-modal-2" class="btn btn-primary">
                            Accept
                          </label>
                          <label for="my-modal-2" class="btn">
                            Close
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <h2 className="text-lg title-font text-gray-500 tracking-widest">
                      Methods
                    </h2>
                    <div className="ml-4">
                      <MethodsList />
                      <MethodsList />
                      <MethodsList />
                      <MethodsList />
                      <MethodsList />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="my-5 border shadow-lg p-5 text-gray-700">
        <div className="flex gap-3 items-center">
          <p className="text-yellow-500 text-xl">
            <IoStarOutline />
          </p>
          <h1 className="font-bold">Review & Rating</h1>
        </div>
        <hr className="my-3" />
        <div>
          <ReviewList />
          {/* <ReviewList />
          <ReviewList />
          <ReviewList /> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
