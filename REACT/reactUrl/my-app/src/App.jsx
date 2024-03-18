import { useState } from "react";
import CustomTable from "./components/for___App/CustomTable";

const App = () => {
    const [url, setUrl] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    
    const handleInputUrl = (event) => {
        setUrl(event.target.value)
    };

    const handleClickLoad = () => {
        setIsLoaded(true);
    
    }
    const handleClickReset = () => {
        setIsLoaded(false);
    }

    return (
        <>
            <div className="flex p-12">
                <input
                    onInput={handleInputUrl}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                />
                <button
                    onClick={handleClickLoad}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Load
                </button>
                <button
                    onClick={handleClickReset}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    reset
                </button>
            </div>
            <div className="p-12">
                <CustomTable url={url} isLoaded={isLoaded}/>
            </div>
        </>
    );
};

export default App;
