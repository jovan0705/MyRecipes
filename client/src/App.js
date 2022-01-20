import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import RecipesPage from "./views/RecipesPage";
import Container from "./views/Container";
import Login from "./views/Auth/Login"
import Register from "./views/Auth/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Container />}>
          <Route path="home" element={<HomePage />} />
          <Route path="recipes" element={<RecipesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
