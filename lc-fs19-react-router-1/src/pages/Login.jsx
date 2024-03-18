import { useNavigate } from "react-router-dom";

const Login = ({login}) => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        login();
        navigate("/profile");
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login;