import { Link, useNavigate } from "react-router-dom"

const NavBarProfile = ({ isLogged, logout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                {
                    isLogged ?
                        <>
                            <button onClick={handleLogout}>Logout</button>
                            <Link to="/profile">Profile</Link>
                        </>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </>
    )
}

export default NavBarProfile;