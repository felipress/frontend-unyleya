import Navigation from "../../components/Navigation"
import "./home.css"

const Home = () => {
    return (
        <div className="Home navigation-fixed">
            <Navigation isLogged />
            <main>
                Homepage
            </main>
        </div>
    )
}

export default Home