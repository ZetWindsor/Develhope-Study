import { Outlet } from "react-router-dom";
import NavBarProfile from "../components/NavBarProfile";

const ProfileLayout = ({ logout, isLogged }) => {
    return (
        <>
            <NavBarProfile logout={logout} isLogged={isLogged} />
            <div id="outlet">
                <Outlet />
            </div>
        </>
    )
}

export default ProfileLayout;