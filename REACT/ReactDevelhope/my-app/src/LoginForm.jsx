import { useState } from "react";

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
        console.log('ciaio',data);
        event.preventDefault()
    }

    return (
        <form onClick={handleLoginButtonSubmit}>
            <h1>My Form Login</h1>
            <input name="username" value={data.username} onChange={handleChange} />
            <input name="password" value={data.password} onChange={handleChange} />
            <input name="checked" type="checkbox" checked={data.checked} onChange={handleChange} />
            <button type="submit" disabled={!data.username || !data.password} >Login</button>
            <button onClick={handleResetForm}>Reset</button>

        </form>
    )
}