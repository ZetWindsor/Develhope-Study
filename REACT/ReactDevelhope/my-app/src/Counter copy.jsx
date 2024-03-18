import { useEffect, useRef, useState } from 'react'

export function Counter2({ initialValue = 0, incrementBy = 1 }) {
	const [counter, setCounter] = useState(initialValue)
	const ref = useRef()

	useEffect(() => {
		if (!ref.current) {
			ref.current = true

			console.log('counter 2 montato')
			
			return () => {
				console.log(`il valore era ${counter}`);
			}
		}
		console.log(`il vaore eseguito e' ${counter}`)
	}, [counter])

	function handleIncrement() {
		setCounter((c) => c + incrementBy)
	}

	function handleDecrement() {
		setCounter((c) => c - incrementBy)
	}

	function handleReset() {
		setCounter(initialValue)
	}

	return (
		<div>
			<h2>Counter: {counter}</h2>
			<button style={{background: 'red'}} onClick={handleIncrement}>Increment</button>
			<button style={{background: 'pink'}} onClick={handleDecrement}>Decrement</button>
			<button style={{background: 'green'}} onClick={handleReset}>Reset</button>
		</div>
	)
}