import { BrowserRouter, Route, Routes } from "react-router-dom";
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

export function App3() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome name="Jimmy" />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users/:username" element={<ShowGithubUser />} />
            </Routes>
        </BrowserRouter>
    );
}