import {Routes, Route} from "react-router-dom"

import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Title from "./pages/Title"
import Player from "./pages/Player"
import NotFound from "./pages/NotFound"

import "./App.css"

const App = () => {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/title/:id" element={<Title />} />
                <Route path="/title/:id/player" element={<Player />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App