import "./notfound.css"
import Navigation from "../../components/Navigation"

const NotFound = () => {
    return (
        <div className="NotFound navigation-fixed">
            <Navigation />
            <main>
                404 not found
            </main>
        </div>
    )
}

export default NotFound