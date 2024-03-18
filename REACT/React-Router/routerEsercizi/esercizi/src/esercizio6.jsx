import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes, useParams } from 'react-router-dom';

export function Welcome({ name }) {
	return <h1>Hello, {name}!</h1>;
}

export function Counter({ initialValue = 0, incrementBy = 1 }) {
	const [count, setCount] = useState(initialValue);

	return (
		<div>
			<p data-testid="count">{count}</p>
			<button onClick={() => setCount((c) => c + incrementBy)}>Increment</button>
		</div>
	);
}

export function GithubUser({ username }) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.github.com/users/${username}`)
			.then((res) => res.json())
			.then((json) => setUser(json))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [username]);

	return (
		<div>
			{user && (
				<>
					<img src={user.avatar_url} />
					<div>{user.login}</div>
					<div>{user.name}</div>
				</>
			)}
			{error && <div>{error.message}</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
}

export function ShowGithubUser() {
	const { username } = useParams();

	return <GithubUser username={username} />;
}

export function GithubUsers() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.github.com/users`)
			.then((res) => res.json())
			.then((json) => setUsers(json))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			{users.length && (
				<ul data-testid='users'>
					{users.map((user) => (
						<li key={user.id}>
							<Link to={`/users/${user.login}`}>{user.login}</Link>
						</li>
					))}
				</ul>
			)}
			{error && <div>{error.message}</div>}
			{loading && <div>Loading...</div>}

			<Outlet />
		</div>
	);
}

export function App6() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Welcome name="Student" />} />
					<Route path="/counter" element={<Counter />} />
					<Route path="/users" element={<GithubUsers />}>
						<Route path=":username" element={<ShowGithubUser />} />
						<Route index element={<p>selezionare un Github user</p>} />

					</Route>
					<Route path="*" element={<div>Not Found!</div>} />
				</Routes>

				<div data-testid="links">
					<Link to="/">Home</Link>
					<Link to="/counter">Counter</Link>
					<Link to='/users'>back</Link>
				</div>
			</BrowserRouter>
		</div>
	);
}
