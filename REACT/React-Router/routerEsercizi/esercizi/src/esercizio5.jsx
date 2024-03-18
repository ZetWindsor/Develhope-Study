import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams, BrowserRouter } from 'react-router-dom';

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
			{user && <div>{user.name}</div>}
			{error && <div>{error.message}</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
}

export function ShowGithubUser() {
	const { username } = useParams();

	return <GithubUser username={username} />;
}

export function App5() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Welcome name="Jimmy" />} />
					<Route path="/counter" element={<Counter />} />
					<Route path="/users/:username" element={<ShowGithubUser />} />
					<Route path="*" element={<div>Not Found!</div>} />
				</Routes>

				<div data-testid="links">
					<Link to="/">Home</Link>
					<Link to="/counter">Counter</Link>
					<Link to="/users/johndoe">John Doe</Link>
				</div>
			</BrowserRouter>
		</div>
	);
}
