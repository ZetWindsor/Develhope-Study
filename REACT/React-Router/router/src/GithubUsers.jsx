import { useGithubUsers } from "./useGithubUsers"

/* const fetcher = url => fetch(url).then(response => response.json()) */


const GithubUsers = () => {
    const { users, error, isLoading, onRefresh } = useGithubUsers()

    return (
        <div>
            <button onClick={onRefresh}>refresh</button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>ERRORE</h3>}
            {users && (<ul>
                {users.map((user) => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>)}

        </div>
    )
}

export default GithubUsers