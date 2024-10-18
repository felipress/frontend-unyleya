import { useContext } from "react"
import Navigation from "../Navigation"

const AppInterface = ({title, children}) => {
    return (
        <div className="AppUI">
            <Navigation />
            <main className="sticky mt-20 bg-white max-w-screen-xl mx-auto px-8 py-4 rounded-xl">
                <h1 className="font-bold text-3xl mt-2 mb-6 pb-7 border-b border-gray-200 text-gray-800">{title}</h1>
                {children}
            </main>
        </div>
    )
}

export default AppInterface