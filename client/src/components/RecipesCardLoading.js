import {
  IoBookmarkOutline,
  IoHeartOutline,
  IoBookmark,
  IoHeart,
} from "react-icons/io5";

const RecipeCardLoading = () => {
  return (
    <div className="w-auto h-auto border shadow-md flex gap-2 rounded-md text-gray-400 hover:shadow-xl duration-200 ease-in hover:cursor-pointer animate-pulse">
      <div className="w-1/2 h-52 image overflow-hidden">
        <div className="w-full h-full rounded-md bg-zinc-400"></div>
      </div>
      <div className="w-1/2 py-2 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex gap-2 py-2 flex-wrap">
            <div class="h-5 w-14 border border-secondary rounded-full"></div>
            <div class="h-5 w-14 border border-accent rounded-full"></div>
          </div>
          <div className="">
            <div className="w-1/2 h-8 bg-zinc-400 rounded-full"></div>
          </div>
          <div className="w-1/3 h-6 bg-zinc-400 rounded-full"></div>
        </div>
        <div className="w-1/3 h-3 bg-zinc-400 rounded-full"></div>
        <div className="flex flex-row-reverse gap-3 py-2 px-5">
          <button className="text-xl block text-secondary ">
            <IoBookmarkOutline />
          </button>
          <button className="text-xl block text-base-content">
            <IoHeartOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardLoading;
