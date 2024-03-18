export function MyUncontrolledForm() {
function handleFormSubmit(event){
    event.preventDefault()

    const username = event.target.elements.namedItem('username').value
 /*const username = event.target.elements.username.value `si puo scrivere anche cosi`*/
    const password = event.target.elements.namedItem('password').value
    const session = event.target.elements.namedItem('session').checked

    const data ={
        username,
        password,
        session
    }
    console.log(data);
}


    return (
        <form onSubmit={handleFormSubmit}>
            <h1>My Uncontrolled Form</h1>
            <input name="username" />
            <input name="password" />
            <input name="session" type="checkbox" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}