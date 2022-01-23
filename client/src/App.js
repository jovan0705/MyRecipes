import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import RecipesPage from "./views/RecipesPage";
import Container from "./views/Container";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import UserProfile from "./views/UserProfile";
import PostRecipe from "./views/forms/PostRecipe";
import ClassPage from "./views/ClassPage";
import WalletPage from "./views/WalletPage";
import CategoriesPage from "./views/CategoriesPage";
import RecipeDetail from './views/RecipeDetail'
import Dashboard from "./views/admin/Dashoard";
import CategoriesAdmin from "./views/admin/CategoriesAdmin";
import IngredientAdmin from "./views/admin/IngredientAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Container />}>
          <Route path="home" element={<HomePage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="UserProfile" element={<UserProfile />} />
          <Route path="post" element={<PostRecipe />} />
          <Route path="classes" element={<ClassPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="detail" element={<RecipeDetail />} />
          <Route path="admin" element={<Dashboard />} >
            <Route path="" element={<CategoriesAdmin />} />
            <Route path="categories" element={<CategoriesAdmin />} />
            <Route path="ingredient" element={<IngredientAdmin />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
