import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import RecipesPage from "./views/RecipesPage";
import Container from "./views/Container";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="home" element={<HomePage />} />
          <Route path="recipes" element={<RecipesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
