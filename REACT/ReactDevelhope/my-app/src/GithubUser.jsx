// GithubUser component

import { useEffect, useState } from "react";

export const GithubUser = ({ username }) => {
    const [users, setUsers] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const result = await response.json();

            console.log(result);

            setUsers(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData(username);
    }, [username]);

    return (
        <>
            {users && (
                <ul>
                    <li>
                        <h1>Name: </h1>
                        {users.name}
                    </li>
                    <li>
                        <h2>Username: </h2>
                        {users.login}
                    </li>
                    <li>
                        <h2>Bio: </h2>
                        {users.bio}
                    </li>
                    <li>
                        <h3>Avatar: </h3>
                        <img style={{ width: 150 + "px" }} src={users.avatar_url} />
                    </li>
                </ul>
            )}
        </>
    );
};
