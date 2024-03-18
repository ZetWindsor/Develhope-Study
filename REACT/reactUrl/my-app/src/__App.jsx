import { useEffect, useState } from "react"

const App = () => {
    const [name, setName] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [cd, setCd] = useState(3);

    const handleNameInput = (event) => {
        const value = event.target.value;

        setName(value)
    }

    const handleToggleClick = () => {
        setIsVisible((isVisible) => {
            return !isVisible;
        })
    }

    useEffect(() => {
        let timer;
        let interval;
        
        if (isVisible) {
            timer = setTimeout(() => {
                setIsVisible(false);
                clearTimeout(timer);
                clearInterval(interval);
                setCd(3);
            },3000);
            interval = setInterval(() => {
                setCd((cd) => {
                    return cd -= 1;
                })
            },1000)
        }
    }, [isVisible]);

    return (
        <>
        <div>
            <input type="text" value={name} onInput={handleNameInput} />
            <button onClick={handleToggleClick}>{isVisible ? "HIDE" : "SHOW"}</button>
            {
                isVisible ? <span>Hello, {name} - ({cd}s)</span> : <></>
            }
        </div>
        </>
    )
}

export default App;