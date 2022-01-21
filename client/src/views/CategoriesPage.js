import CategoryCard from "../components/CategoryCard";

const CategoriesPage = () => {
  return (
    <div className="h-screen">
      <div className="heading">Categories</div>
      <div className="grid grid-cols-6 gap-10">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default CategoriesPage;
