export function MouseClicker() {
	function handleButtonClick(event) {
		console.log(event.target.name, event.currentTarget.src)
	}
	

	return (
		<div>
			<button name="one" onClick={handleButtonClick}>
				Click me
			</button>
			<img width={20} height={20} src="" alt="" onClick={handleButtonClick} />	
				</div>
	)
}
