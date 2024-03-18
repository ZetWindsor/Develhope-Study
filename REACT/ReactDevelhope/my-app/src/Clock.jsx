import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function OrologgioBello() {
    const [date, setDate] = useState(new Date())
    const language = useContext(LanguageContext)

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return <div>
        <p>{language === 'en' ? 'The current time:' : 'l ora esatta:'}{date.toLocaleTimeString()} </p>

    </div>
}


