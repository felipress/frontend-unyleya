import "./navigation.css"
import Brand from "./brand"
import RightActions from "./rightActions"

const Navigation = ({isLogged}) => {
    if(isLogged) {
        return (
            <div className="Navigation">
                <Brand />
                <RightActions />
            </div>
        )
    }
    return (
        <div className="Navigation">
            <Brand />
        </div>
    )
}

export default Navigation