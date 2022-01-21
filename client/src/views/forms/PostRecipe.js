import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";

const AddRecipe = () => {
  const animatedComponents = makeAnimated();

  const [inputData, setInputData] = useState({
    name: "",
    category: "",
    indegrients: [],
    image: "",
    steps: "",
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleInput = (e) => {
    const val = e.target.value;
    const field = e.target.name;

    console.log(val, field);

    setInputData({
      ...inputData,
      [field]: val,
    });
  };

  const handleIndegrients = (e) => {
    setInputData({
      ...inputData,
      indegrients: e,
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

  return (
    <div>
      <form>
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
            >
              <option disabled="disabled" selected="selected">
                Choose Category
              </option>
              <option>telekinesis</option>
              <option>time travel</option>
              <option>invisibility</option>
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
          />
        </div>
        {/*End of Indegrients */}

        {/* File Input */}
        <div className="mb-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-base-content">
                Image
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
                {!inputData.image && "Select a file"}
                {inputData.image && inputData.image.length > 30
                  ? `${inputData.image.substring(0, 30)}...`
                  : inputData.image}
              </span>
              <input
                name="image"
                type="file"
                className="hidden"
                onChange={(e) => handleInput(e)}
              />
            </label>
          </div>
        </div>
        {/* End of File Input */}

        {/* Steps */}
        <div className="form-control mb-10">
          <label className="label">
            <span className="label-text text-lg text-base-content">Steps</span>
          </label>
          <textarea
            onChange={(e) => handleInput(e)}
            name="steps"
            className="textarea h-24 textarea-bordered textarea-secondary"
            placeholder="Bio"
          ></textarea>
        </div>
        {/* End of Steps */}

        <div>
          <button class="btn btn-primary">Post new recipe</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
