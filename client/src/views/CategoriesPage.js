import CategoryCard from "../components/CategoryCard";
import CategoryCardLoading from "../components/CategoryCardLoading";

const CategoriesPage = () => {
  return (
    <div className="h-screen pt-10">
      <div className="heading">Categories</div>
      <div className="grid grid-cols-6 gap-10">
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
        <CategoryCardLoading />
      </div>
    </div>
  );
};

export default CategoriesPage;
