import "./App.css"
import {Routes, Route} from "react-router-dom"
import AppInterface from "./components/AppInterface"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Collection from "./pages/Collection"
import { AuthProvider } from "./context/AuthContext"


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<AppInterface title="Acervo"><Home /></AppInterface>} />
          <Route path="/profile" element={<AppInterface title="Perfil"><Profile /></AppInterface>} />
          <Route path="/collection/create" element={<AppInterface title="Novo objeto"><Collection /></AppInterface>} />
          <Route path="/collection/edit/:id" element={<AppInterface title="Editar objeto"><Collection /></AppInterface>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
