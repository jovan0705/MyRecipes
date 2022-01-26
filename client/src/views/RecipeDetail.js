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
import { doRating } from "../store/actionCreators/userActon";
import { errorAlert } from "../helpers/alerts";

const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipeDetailReducer } = useSelector((store) => store);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRating = (num) => {
    setRating(num);
  };

  useEffect(() => {
    dispatch(fetchRecipe(id));
  }, []);

  const handleReview = (e) => {
    const value = e.target.value;
    setReview(value);
  };

  const handleSubmit = () => {
    if (!rating) errorAlert("Please insert rating");
    if (!review) errorAlert("Please insert review");
    const payload = {
      rating,
      review,
    };
    dispatch(doRating(id, payload));
  };
  return (
    <div className="py-10">
      <div className="text-gray-700 body-font border shadow-lg py-10">
        <div className="container mx-auto">
          {recipeDetailReducer.recipe.hasOwnProperty("recipe") && (
            <div className="mx-auto h-auto flex">
              <div className="flex">
                <div>
                  <img
                    alt="ecommerce"
                    className="w-full object-cover object-center rounded border border-gray-200 h-96 "
                    src={recipeDetailReducer.recipe.recipe.imageUrl}
                  />
                </div>
                <div className="w-full mt-6 px-5 space-y-3 pb-7 rounded-md">
                  <div className="flex">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {recipeDetailReducer.recipe.recipe.name}
                    </h1>
                    <div class="badge ml-2 badge-outline">
                      {recipeDetailReducer.recipe.recipe.totalCalories} Cal
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="rating rating-sm">
                      {recipeDetailReducer.recipe.recipe.RecipeRatings
                        .length === 0 && <h1>No rating yet...</h1>}
                      {recipeDetailReducer.recipe.recipe.RecipeRatings
                        .length === 1 &&
                        Array(
                          recipeDetailReducer.recipe.recipe.RecipeRatings[0]
                            .rating
                        ).fill(<Rating />)}
                      {recipeDetailReducer.recipe.recipe.RecipeRatings.length >
                        1 &&
                        Array(
                          Math.round(
                            recipeDetailReducer.recipe.recipe.RecipeRatings.map(
                              (el) => el.rating
                            ).reduce((prev, next) => prev + next) /
                              recipeDetailReducer.recipe.recipe.RecipeRatings
                                .length
                          )
                        ).fill(<Rating />)}
                    </div>
                    <span className="text-gray-600 ml-3">
                      {recipeDetailReducer.recipe.recipe.RecipeRatings.length}{" "}
                      Reviews
                    </span>
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
                      {/* {
                      recipeDetailReducer.recipe.recipe.RecipeRatings.find(el => el)
                    } */}
                      <label
                        for="my-modal-2"
                        className="btn btn-primary modal-button"
                      >
                        Rate Now
                      </label>
                      <input
                        type="checkbox"
                        id="my-modal-2"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box">
                          <div className="rating">
                            <div onChange={() => handleRating(1)}>
                              <input
                                type="radio"
                                name="rating-2"
                                checked="checked"
                                className="mask mask-star-2 bg-warning"
                              />
                            </div>
                            <div onChange={() => handleRating(2)}>
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-warning"
                              />
                            </div>
                            <div onChange={() => handleRating(3)}>
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-warning"
                              />
                            </div>
                            <div onChange={() => handleRating(4)}>
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-warning"
                                // onChange={() => handleRating(4)}
                              />
                            </div>
                            <div onChange={() => handleRating(5)}>
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-warning"
                              />
                            </div>
                          </div>

                          <p className="mb-8">Rating: {rating} </p>

                          <div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text text-lg">
                                  Write a review:
                                </span>
                              </label>
                              <textarea
                                className="textarea h-24 textarea-bordered textarea-primary"
                                placeholder="Review..."
                                onChange={(e) => handleReview(e)}
                              ></textarea>
                            </div>
                          </div>

                          <div className="modal-action">
                            <label
                              for="my-modal-2"
                              className="btn btn-primary"
                              onClick={handleSubmit}
                            >
                              Submit
                            </label>
                            <label for="my-modal-2" className="btn">
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
              <div>test</div>
            </div>
          )}
        </div>
      </div>

      {recipeDetailReducer.recipe.hasOwnProperty("recipe") && (
        <div className="my-5 border shadow-lg p-5 text-gray-700">
          <div className="flex gap-3 items-center">
            <p className="text-yellow-500 text-xl">
              <IoStarOutline />
            </p>
            <h1 className="font-bold">Review & Rating</h1>
          </div>
          <hr className="my-3" />
          <div>
            {recipeDetailReducer.recipe.recipe.RecipeRatings.map(
              ({ rating, review }) => {
                return <ReviewList rating={rating} review={review} />;
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
