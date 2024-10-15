import {Routes, Route} from "react-router-dom"
import './App.css';

import Home from "./pages/Home"
import Login from "./pages/Login"
import Perfil from "./pages/Perfil"
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
