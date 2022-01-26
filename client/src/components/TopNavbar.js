import Dropdown from "../components/Dropdown";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setFilter } from "../store/actionCreators/recipesCreator";
import LogoMyRecipe from "../assets/LogoMyRecipe.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../store/actionCreators/userActon";

const TopNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useState("");
  const [filterName, setFilterName] = useState("");
  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFilterName(name);
    setFilterValue(value);
    console.log();
  };

  const { userReducer } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  const handleClick = () => {
    dispatch(setFilter(`?${filterName}=${filterValue}`));
    navigate(`/recipes/?${filterName}=${filterValue}`);
  };

  return (
    <div className="flex justify-between items-center mb-10">
      <img
        src={LogoMyRecipe}
        className="flex-1 mr-20"
        style={{ width: "10px", height: "100px", maxWidth: "280px" }}
      />

      <div className="form-control flex-1 ml-20">
        <div className="relative ml-20">
          <input
            name="search"
            type="text"
            placeholder="Search recipes..."
            className="w-full pr-16 input input-primary input-bordered input-lg rounded-full"
            onChange={(event) => handleInput(event)}
          />
          <button
            className="absolute top-0 right-0 rounded-l-none rounded-r-full btn btn-primary btn-lg text-base-content"
            onClick={() => handleClick()}
          >
            <IoSearch size="28" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <div className="flex flex-row items-center">
          <div className="avatar mr-5">
            <div className="rounded-full w-16 h-16 ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userReducer.user.profilePict} alt="avatar" />
            </div>
          </div>
          <Dropdown name={userReducer.user.name} />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
