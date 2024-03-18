import { useDispatch } from "react-redux"
import { login } from "../store/reducers/authSlice";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        const { name, value } = e.target;

        setForm((form) => ({ ...form, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const results = await axios({
                url: "http://localhost:3000/users/login",
                method: "POST",
                data: form
            });

            const data = results.data; // -> { user: { ... }, token: ... }
            dispatch(login(data));
            navigate("/profile")
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onInput={handleInput} value={form.email} />
                <input type="password" name="password" onInput={handleInput} value={form.password} />
                <button type="submit">SUBMIT</button>
            </form>
        </>
    )

}
export default Login
