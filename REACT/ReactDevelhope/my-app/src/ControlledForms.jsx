import { useState } from 'react'

export function Welcome({ name }) {
	return <p>Hello, {name}!</p>
}

export function InteractiveWelcome() {
	const [name, setName] = useState('')

	function handleChange(event) {
		setName(event.target.value)
	}

	return (
		<div>
			<input data-testid="input" onChange={handleChange} value={name} />
			<Welcome name={name} />
		</div>
	)
}
