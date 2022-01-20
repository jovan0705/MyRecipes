import { IoSearch } from "react-icons/io5";
import Dropdown from "../components/Dropdown";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="flex-1 border">MyRecipe</h1>

        <div className="form-control flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full pr-16 input input-primary input-bordered input-sm"
            />
            <button className="absolute top-0 right-0 rounded-l-none btn btn-primary btn-sm text-base-content">
              <IoSearch size="18" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <div className="flex flex-row items-center">
            <div class="avatar mr-5">
              <div class="rounded-full w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2">
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
    </div>
  );
};

export default HomePage;
