import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

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

export function App2() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome name="Jimmy" />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
		</BrowserRouter>
	);
}
