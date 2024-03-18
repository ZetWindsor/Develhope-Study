import useSWR, { mutate } from "swr"

const fetcher = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (error) {
        throw new Error("Error to fetch server")

    }
}


export function useGithubUsers() {
    const { data, error, mutate } = useSWR(`https://api.github.com/users`, fetcher)

    function handleRefreshUsers() {
        mutate()
    }

    return {
        users: data,
        error,
        isLoading: !data && !error,
        onRefresh: handleRefreshUsers,
    }
}