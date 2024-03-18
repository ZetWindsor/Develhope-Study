// GithubUsers component

import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export const GithubUsers = () => {
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const result = await response.json();

            setUsers([result]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    return (
        <>
            <div>
                <form>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </form>
                <button onClick={handleSearch}>Search</button>
            </div>

            {users && users.map((user) => (
                <GithubUser key={user.id} username={user.login} />
            ))}
        </>
    );
};
