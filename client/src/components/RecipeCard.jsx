import {
  IoBookmarkOutline,
  IoHeartOutline,
  IoBookmark,
  IoHeart,
} from "react-icons/io5";

const RecipeCard = () => {
  return (
    <>
      <div className="w-auto h-auto border shadow-md flex gap-2 rounded-md text-gray-400 hover:shadow-xl duration-200 ease-in hover:cursor-pointer">
        <div className="w-1/2 h-52 image overflow-hidden">
          <img
            className="h-full w-full mx-auto rounded-md"
            src="https://images.squarespace-cdn.com/content/v1/5fda67f173ed1f33f0c9a3bc/1608153624258-5Q8LTVG7Y8PY8RSC9T13/MapleBaconBeerBurger.jpg?format=1000w"
            alt=""
          />
        </div>
        <div className="w-1/2 py-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex gap-2 py-2 flex-wrap">
              <div class="badge badge-secondary badge-outline">Cake</div>
              <div class="badge badge-accent badge-outline">Burger</div>
            </div>
            <div className="">
              <h3 className="font-bold text-xl">Beef Burger</h3>
            </div>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-warning "
              />
              <input
                type="radio"
                name="rating-2"
                checked="checked"
                className="mask mask-star-2 bg-warning "
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-warning "
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-warning "
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-warning "
              />
            </div>
          </div>
          <div className="">
            <p className="text-xs">
              Posted by <span className="font-bold">Jane Doe</span>
            </p>
          </div>
          <div className="flex flex-row-reverse gap-3 py-2 px-5">
            <div className="group">
              <button className="text-xl block group-hover:hidden text-secondary ">
                <IoBookmarkOutline />
              </button>
              <button className="text-xl hidden group-hover:block text-secondary">
                <IoBookmark />
              </button>
            </div>
            <div className="group">
              <button className="text-xl block text-base-content group-hover:hidden">
                <IoHeartOutline />
              </button>
              <button className="text-xl hidden text-red-600 group-hover:block">
                <IoHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
