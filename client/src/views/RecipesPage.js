import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "../store/actionCreators";

const RecipesPage = () => {
  const dispatch = useDispatch();
  const {
    recipes,
    recipesLoading: loading,
    recipesError: error,
  } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <div>
      {recipes && !loading && <h1>{JSON.stringify(recipes)}</h1>}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
    </div>
  );
};

export default RecipesPage;
