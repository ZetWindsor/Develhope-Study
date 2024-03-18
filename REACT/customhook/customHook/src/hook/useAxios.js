import axios from "axios"
import { useEffect, useState } from "react"

const DEFAULT_OPTIONS = {
    selector: null,
    method: "GET",
    data: null,
    headers: {}
}

/**
 * CustomHook to make dinamic API request
 * @param {string} url //base url to make API request
 * @param {object} options 
 * @param {string|null} [options.selector] //param to get from response, default `null`
 * @param {string} [options.method] request method, default `GET`
 * @param {*} [options.data] request data content, default `null`
 * @param {object} [options.headers] request headers, default `{}`
 * @returns {object}
 */
export const useAxios = (url, options = { ...DEFAULT_OPTIONS }) => {
    options = {
        ...DEFAULT_OPTIONS,
        ...options,
    }

    if (options.selector != null && typeof options.selector != "string") {
        throw new Error("options.selector must be a valid string or null");
    }

    if (typeof options.method !== 'string' || ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].indexOf(options.method.toUpperCase()) === -1) {
        throw new Error("'options.method must be a valid string, value accepted: one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'")
    }

    if (typeof options.headers !== 'object' || Array.isArray(options.headers)) {
        throw new Error('options.header must be a valid object')
    }

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)

    const refetch = async (_url) => {
        if (error) {
            setError(false)
        }

        try {
            const axiosOptions = {
                url: _url ? _url : url,
                method: options.method,
            }

            if (options.data != null) axiosOptions.data = options.data
            if (Object.keys(options.headers).length > 0) axiosOptions.headers = options.headers

            const response = await axios(axiosOptions)

            const result = options.selector === null ? response.data : response.data[options.selector];
            setData(result)

        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    }

    useEffect(() => {
        refetch();
    }, [url])

    return {
        data, error, refetch, setData
    }
}

