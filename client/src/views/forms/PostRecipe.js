// React Utilities
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../store/actionCreators/categoriesCreator";
import { fetchIngredients } from "../../store/actionCreators/ingredientsCreator";
import { rename } from "../../helpers/uploadFileName";
import { postRecipe } from "../../store/actionCreators/recipesCreator";

const AddRecipe = () => {
  const dispatch = useDispatch();
  const { categoryReducer, ingredientsReducer, recipeReducer } = useSelector(
    (store) => store
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchIngredients());
  }, []);

  const animatedComponents = makeAnimated();

  const [inputData, setInputData] = useState({
    name: "",
    category: "",
    indegrients: [],
    imageFile: "",
    steps: "",
    totalCalories: 0,
  });

  const [imageLabel, setImageLabel] = useState("");

  const options = ingredientsReducer.ingredients.map(
    ({ id, name, calorie }) => {
      return {
        value: id,
        label: `${name}, ${calorie} cal`,
        calorie: calorie,
      };
    }
  );

  const handleInput = (e) => {
    const val = e.target.value;
    const field = e.target.name;

    setInputData({
      ...inputData,
      [field]: val,
    });
  };

  const handleImage = (e) => {
    const val = e.target.files[0];
    const field = e.target.name;

    setImageLabel(e.target.value);

    setInputData({
      ...inputData,
      [field]: val,
    });
  };

  const handleIndegrients = (e) => {
    let cal;
    if (e.length === 0) {
      cal = 0;
    } else if (e.length === 1) {
      cal = e[0].calorie;
    } else {
      cal = e.map(({ calorie }) => calorie).reduce((prev, next) => prev + next);
    }
    setInputData({
      ...inputData,
      indegrients: e,
      totalCalories: +cal,
    });
  };

  const indegrientStyle = {
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "orange" : "black",
      padding: 10,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", inputData.name);
    fd.append("imageFile", inputData.imageFile);
    fd.append("steps", inputData.steps);
    fd.append("totalCalories", inputData.totalCalories);

    dispatch(postRecipe(fd));
  };

  return (
    <div className="min-h-screen border flex justify-center items-center">
      <div className="flex w-11/12 border h-11/12">
        <div className="flex-1 border-r-2"> Test</div>
        <form style={{ flex: 2 }} onSubmit={(e) => handleSubmit(e)}>
          {/* First Row */}
          {/* Name  */}
          <div className="flex justify-between gap-10 mb-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg text-base-content">
                  Recipe's Name
                </span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-secondary input-bordered"
                onChange={(e) => handleInput(e)}
                required
              />
            </div>
            {/* End of name */}

            {/* Category */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg text-base-content">
                  Category
                </span>
              </label>
              <select
                className="select select-bordered select-secondary w-full"
                name="category"
                onChange={(e) => handleInput(e)}
                required
              >
                <option disabled="disabled" selected="selected">
                  Choose Category
                </option>
                {categoryReducer.categories.map(({ id, name }) => {
                  return (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/*End of Category */}
          </div>
          {/* End of first row */}

          {/* Indegrients */}
          <div className="form-control flex-1 mb-6 z-0">
            <label className="label">
              <span className="label-text text-lg text-base-content">
                Indegrients
              </span>
            </label>
            <Select
              onChange={(e) => handleIndegrients(e)}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
              styles={indegrientStyle}
              required
            />
          </div>
          {/*End of Indegrients */}

          {/* File Input */}
          <div className="mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-base-content">
                  imageFile
                </span>
              </label>
              <label className="flex flex-col items-center px-4 py-6 bg-primary rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white duration-200">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  {!imageLabel && "Select a file"}
                  {imageLabel && imageLabel.length > 30
                    ? `${rename(imageLabel).substring(0, 70)}...`
                    : rename(imageLabel)}
                </span>
                <input
                  name="imageFile"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImage(e)}
                  required
                />
              </label>
            </div>
          </div>
          {/* End of File Input */}

          {/* Steps */}
          <div className="form-control mb-10">
            <label className="label">
              <span className="label-text text-lg text-base-content">
                Steps
              </span>
            </label>
            <textarea
              onChange={(e) => handleInput(e)}
              name="steps"
              className="textarea h-24 textarea-bordered textarea-secondary"
              required
            ></textarea>
          </div>
          {/* End of Steps */}
          {/* Total Cal */}
          <div>Total Calories: {inputData.totalCalories}</div>

          <div>
            {!recipeReducer.posting && (
              <button className="btn btn-primary" type="submit">
                Post a new recipe
              </button>
            )}
            {recipeReducer.posting && (
              <button className="btn btn-primary loading" type="submit">
                Posting ...
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
