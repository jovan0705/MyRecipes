import Dropdown from "../components/Dropdown";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilter } from "../store/actionCreators/recipesCreator";

const TopNavbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [filterValue, setFilterValue] = useState("")
  const [filterName, setFilterName] = useState("")
  const handleInput = (event) => {
    const value = event.target.value
    const name = event.target.name
    setFilterName(name)
    setFilterValue(value)
    console.log()
  }

  const handleClick = () => {
    dispatch(setFilter(`?${filterName}=${filterValue}`))
    navigate(`/recipes/?${filterName}=${filterValue}`)
  }

  return (
    <div className="flex justify-between items-center mb-20">
      <h1 className="flex-1">Logo</h1>

      <div className="form-control flex-1">
        <div className="relative">
          <input
            name="search"
            type="text"
            placeholder="Search recipes..."
            className="w-full pr-16 input input-primary input-bordered input-lg rounded-full"
            onChange={(event) => handleInput(event)}
          />
          <button className="absolute top-0 right-0 rounded-l-none rounded-r-full btn btn-primary btn-lg text-base-content"
          onClick={() => handleClick()}>
            <IoSearch size="28" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <div className="flex flex-row items-center">
          <div className="avatar mr-5">
            <div className="rounded-full w-16 h-16 ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                alt="avatar"
              />
            </div>
          </div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
