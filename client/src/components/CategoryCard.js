import { IoChevronForwardCircleSharp } from "react-icons/io5";

const CategoryCard = () => {
  return (
    <div className="col-span-1 border bg-white rounded-xl shadow hover:bg-primary  hover:text-white duration-200 ease-in group h-56">
      <div className="text-center p-5 border h-full flex justify-around flex-col">
        <div class="avatar">
          <div class="rounded-full w-17 h-17 mx-auto group-hover:opacity-90">
            <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
          </div>
        </div>
        <div className="my-1 font-semibold text-xl hover:cursor-context-menu">
          Category
        </div>
        <div className="text-primary text-3xl flex justify-center group-hover:text-white duration-200 hover:scale-125 hover:cursor-pointer">
          <IoChevronForwardCircleSharp />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
