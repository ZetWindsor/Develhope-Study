import { $useParams, $useQuery, render } from "../lib/main.mjs"

export const Param = (props = { root }) => {
    const params = $useParams("param");
    const query = $useQuery();

    const HTML = () => `
        <div class="w-screen h-screen flex items-center flex-col pt-24" id="profile-page">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Params</h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Above is the param passed to this page.
            </p>
            <div class="flex justify-center items-center flex-col mt-6 p-12 border-gray-50 shadow rounded-xl">
                <h3 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-xl dark:text-white">Params</h3>
                <pre class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">${JSON.stringify(params, null, 2)}</pre>
            </div>
            <div class="flex justify-center items-center flex-col mt-6 p-12 border-gray-50 shadow rounded-xl">
                <h3 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-xl dark:text-white">Query</h3>
                <pre class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">${JSON.stringify(query, null, 2)}</pre>
            </div>
        </div>
    `;

    return render(props.root, HTML)
}