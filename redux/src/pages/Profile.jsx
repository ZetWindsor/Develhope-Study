import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/reducers/authSlice";

const Profile = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <pre>
                {JSON.stringify(auth, null, 2)}
            </pre>
            <button onClick={handleLogout}>LOGOUT</button>
        </>
    )
}

export default Profile