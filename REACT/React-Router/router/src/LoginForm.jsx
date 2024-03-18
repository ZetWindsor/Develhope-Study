import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export function LoginForm() {
    const [data, setData] = useState({
        username: '',
        password: '',
        checked: false,
    })

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        setData((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    function handleResetForm() {
        setData(createData())
    }

    function handleLoginButtonSubmit(event) {
        console.log('ciaio', data);
        event.preventDefault()
    }

    const navigate = useNavigate()

    function handleBackHome() {
        navigate('/')
    }

    return (<>
        <button onClick={handleBackHome}>torna alla home</button>
        <form onClick={handleLoginButtonSubmit}>
            <h1>My Form Login</h1>
            <input name="username" value={data.username} onChange={handleChange} />
            <input name="password" value={data.password} onChange={handleChange} />
            <input name="checked" type="checkbox" checked={data.checked} onChange={handleChange} />
            <button type="submit" disabled={!data.username || !data.password} >Login</button>
            <button onClick={handleResetForm}>Reset</button>

        </form>
    </>)
}

export default LoginForm