import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./esercizio1";
import { Counter } from "./esercizio2";
import { useEffect, useState } from "react";

export function ShowGithubUser({ username }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchGithubUser = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching GitHub user:', error);
            }
        };

        fetchGithubUser();
    }, [username]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{user.login}</h2>
            <p>Name: {user.name}</p>
            <p>Followers: {user.followers}</p>
        </div>
    );
}

export function App4() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div> <Welcome name="Jimmy" /> <Link to="/counter">vai al contatore</Link> | <Link to="/users/:username">vai al users</Link> </div>} />
                <Route path="/counter" element={<div><Counter /><Link to="/">vai alla home</Link> | <Link to="/users/:username">vai al users</Link>   </div>} />
                <Route path="/users/:username" element={<div><ShowGithubUser /><Link to="/">vai alla home</Link> | <Link to="/counter">vai al contatore</Link></div>} />
            </Routes>
        </BrowserRouter>
    );
}