// Components
import CategoryCard from "../components/CategoryCard";
import CategoryCardLoading from "../components/CategoryCardLoading";
import InternalServerError from "../components/InternalServerError";

// React Utilites
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { fetchCategories } from "../store/actionCreators/categoriesCreator";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categoryReducer } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="h-screen pt-10">
      <div className="heading">Categories</div>

      {!categoryReducer.categoriesLoading && categoryReducer.categories && (
        <div className="grid grid-cols-6 gap-10">
          {categoryReducer.categories.map(({ id, imageUrl, name }) => {
            return (
              <CategoryCard key={id} id={id} imageUrl={imageUrl} name={name} />
            );
          })}
        </div>
      )}

      {categoryReducer.categoriesLoading && (
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
      )}

      {categoryReducer.categoriesError && <InternalServerError />}
    </div>
  );
};

export default CategoriesPage;
