import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import RecipesPage from "./views/RecipesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RecipesPage />} />
      </Routes>
    </div>
  );
}

export default App;
