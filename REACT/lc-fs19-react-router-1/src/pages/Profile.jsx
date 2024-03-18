import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <>
            <h1>Profile</h1>
            <div>
                <Link to="/profile/1?page=1&limit=10">raffaele</Link>
                <Link to="/profile/2?page=2&limit=15">ale</Link>
                <Link to="/profile/3?page=3&limit=12">francesco</Link>
            </div>
        </>
    )
}

export default Profile;