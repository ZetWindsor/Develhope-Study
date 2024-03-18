import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export function useGithubUser(username) {
	if (username === null) {
		return {
			user: null,
			error: null,
			loading: false,
		}
	}



	const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

	return {
		user: data,
		error,
		loading: !data && !error,
	}
}
