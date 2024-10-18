import "./App.css"
import {Routes, Route} from "react-router-dom"
import AppInterface from "./components/AppInterface"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Collection from "./pages/Collection"
import Museum from "./pages/Museum"
import { AuthProvider } from "./context/AuthContext"


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppInterface title="Acervo"><Home /></AppInterface>} />
        <Route path="/profile" element={<AppInterface title="Minha Conta"><Profile /></AppInterface>} />
        <Route path="/collection/create" element={<AppInterface title="Cadastrar objeto"><Collection /></AppInterface>} />
        <Route path="/collection/edit/:id" element={<AppInterface title="Editar objeto"><Collection /></AppInterface>} />
        <Route path="/museum" element={<AppInterface title="Configurações do Museu"><Museum /></AppInterface>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
