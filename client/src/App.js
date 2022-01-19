import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
<<<<<<< HEAD
import RecipesPage from "./views/RecipesPage";
=======
import Login from "./views/Auth/Login"
>>>>>>> sys/loginpage

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<RecipesPage />} />
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
>>>>>>> sys/loginpage
      </Routes>
    </div>
  );
}

export default App;
