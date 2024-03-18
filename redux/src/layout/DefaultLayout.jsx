import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default DefaultLayout;