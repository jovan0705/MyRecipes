const CategoryLoading = () => {
  return (
    <div className="col-span-1 border bg-white rounded-xl shadow ease-in group h-56">
      <div className="animate-pulse text-center p-5 border h-full flex justify-around flex-col">
        <div class="w-24 h-24 bg-zinc-400 mx-auto rounded-full"></div>
        <div class="my-1 rounded-full bg-zinc-400 h-4 w-1/2 mx-auto"></div>
        <div className="rounded-full h-7 w-7 mx-auto bg-zinc-400"></div>
      </div>
    </div>
  );
};

export default CategoryLoading;
