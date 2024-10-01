import Navigation from "../../components/Navigation"
import "./profile.css"

const Profile = () => {
    return (
        <div className="Profile navigation-fixed">
            <Navigation isLogged />
            <main>
                Profile
            </main>
        </div>
    )
}

export default Profile