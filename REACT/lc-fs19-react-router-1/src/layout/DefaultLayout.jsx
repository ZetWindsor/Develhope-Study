import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"

const DefaultLayout = ({ logout, isLogged }) => {
    return (
        <>
            <NavBar logout={logout} isLogged={isLogged} />
            <div id="outlet">
                <Outlet />
            </div>
        </>
    )
}

export default DefaultLayout;