const ClassCardLoading = () => {
  return (
    <div className="border border-primary flex col-span-1 rounded-xl overflow-hidden">
      <div className="flex-1 rounded-xl">
        <div className="bg-gray-400 h-full w-full animate-pulse"></div>
      </div>
      <div class="flex-1 flex flex-col p-5">
        <div className="flex mb-10">
          <div className="bg-gray-400 h-5 w-24 animate-pulse rounded-full mr-5"></div>
          <div className="bg-gray-400 h-5 w-16 animate-pulse rounded-full"></div>
        </div>
        <div className="mb-10">
          <div className="bg-gray-400 h-5 w-full animate-pulse rounded-full mb-3"></div>
          <div className="bg-gray-400 h-5 w-full animate-pulse rounded-full"></div>
        </div>

        <div class="flex gap-10">
          <div className="bg-gray-400 h-10 w-28  animate-pulse rounded-lg"></div>
          <div className="bg-gray-400 h-10 w-24 animate-pulse rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ClassCardLoading;
