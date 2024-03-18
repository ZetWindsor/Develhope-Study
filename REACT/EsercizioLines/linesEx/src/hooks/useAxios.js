import { useEffect, useState } from "react"
import axios from 'axios'

export const useAxios = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)

    const fetchLines = async () => {
        if (error) {
            setError(false)
        }

        try {
            const result = await axios({
                url,
                method: "GET"
            })
            setData(result.data)


        } catch (error) {
            setError(error.message)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLines()
    }, [url])


    return {
        data, error, fetchLines
    }
}
