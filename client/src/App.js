import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
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
import { ProtectedRoute, ProtectedLogin } from "./routes/ProtectedRoute";
import RecipeDetail from "./views/RecipeDetail";
import Dashboard from "./views/admin/Dashoard";
import CategoriesAdmin from "./views/admin/CategoriesAdmin";
import IngredientAdmin from "./views/admin/IngredientAdmin";
import Feed from "./views/Feed";
import ForumPage from "./views/ForumPage";
import ForumChat from "./components/ForumChat";
import MyRecipesPage from "./views/MyRecipesPage";
import FavouritePage from "./views/FavouritePage";
// import { io } from "socket.io-client";

// const socket = io.connect("http://localhost:3000")

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedLogin>
              {" "}
              <Login />{" "}
            </ProtectedLogin>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedLogin>
              {" "}
              <Register />{" "}
            </ProtectedLogin>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Container />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="detail/:id" element={<RecipeDetail />} />
          <Route path="UserProfile" element={<UserProfile />} />
          <Route path="post" element={<PostRecipe />} />
          <Route path="classes" element={<ClassPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="feeds" element={<Feed />} />
          <Route path="favourite" element={<FavouritePage />} />
          <Route path="forum" element={<ForumPage />}>
            <Route path=":region" element={<ForumChat />} />
          </Route>
          <Route path="detail" element={<RecipeDetail />} />
          <Route path="myrecipes" element={<MyRecipesPage />} />
          <Route path="admin" element={<Dashboard />}>
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
