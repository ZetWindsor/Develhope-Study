import { useSelector } from "react-redux";
import { Link } from "react-router-dom"


const Navbar = () => {
    const auth = useSelector((state) => state.auth)

    return (
        <>
            <nav className="flex gap-4">
                <Link to="/">HOME</Link>
                {
                    auth.token != null ? <Link to="/profile">PROFILE</Link> : <Link to="/login">LOGIN</Link>
                }
            </nav>
        </>
    )
}

export default Navbar;