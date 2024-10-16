import "./App.css"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navigation from "./components/Navigation"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/navigation" element={<Navigation />} />
    </Routes>
  );
}

export default App;
