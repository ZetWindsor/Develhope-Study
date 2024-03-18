import { useEffect, useRef } from 'react'

export function MyComponentRefs2() {
	const ref = useRef()

	useEffect(() => {
		if (!ref.current) {
			ref.current = true

			console.log('First render')
		}
		
	})

	return (
		<div>
			<p>MyComponent</p>
		</div>
	)
}
