import { IoChevronForwardCircleSharp } from "react-icons/io5";

const CategoryCard = () => {
  return (
    <div className="col-span-1 border bg-white rounded-xl shadow hover:bg-primary  hover:text-white duration-200 ease-in group">
      <div className="text-center p-5">
        <div class="avatar">
          <div class="rounded-full w-14 h-14">
            <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
          </div>
        </div>
        <div className="my-1 font-semibold text-md hover:cursor-context-menu">
          Category
        </div>
        <div className="text-primary flex justify-center group-hover:text-white duration-200 hover:scale-125 hover:cursor-pointer">
          <IoChevronForwardCircleSharp size={30} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
