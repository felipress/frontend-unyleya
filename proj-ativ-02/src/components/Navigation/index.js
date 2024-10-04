import "./navigation.css"
import Brand from "./brand"
import RightActions from "./rightActions"
import { useLocation } from "react-router-dom"

const Navigation = () => {
    const page = useLocation()
    if(page.pathname !== "/" && page.pathname !== "/login" && page.key !== "default") {
        return (
            <div className="Navigation">
                <Brand />
                <RightActions />
            </div>
        )
    }
}

export default Navigation