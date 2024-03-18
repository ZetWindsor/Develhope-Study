import { $listener, $redirect, render } from "../lib/main.mjs"

const listen = $listener("home");

export const Home = (props = { root }) => {

    const handleClick = (event) => {
        if (event.target.id === "go") {
            const param = document.querySelector("#param").value;
            const query = document.querySelector("#query").value;

            listen.offAll();

            $redirect(`/param/${param}?${query}`);
        }
    }

    listen.on("click", handleClick);

    const HTML = () => `
        <div class="w-screen h-screen flex items-center flex-col pt-24" id="profile-page">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Home</h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                This is the home page with a slot counter component example.
            </p>
            <slot name="counter"></slot>
            <div class="flex justify-center items-center flex-col mt-6 p-12 border-gray-50 shadow rounded-xl gap-2">
                <h3 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-xl dark:text-white">Params</h3>
                <input type="text" class="counter-input text-center border border-gray-200 rounded py-2 px-4" id="param" placeholder="value..." />
                <input type="text" class="counter-input text-center border border-gray-200 rounded py-2 px-4" id="query" value="" placeholder="name=value&name1=value1..." />
                <button type="button" id="go" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go</button>
            </div>
            <div class="flex justify-center items-center flex-col mt-6 p-12 border-gray-50 shadow rounded-xl gap-2">
                <h3 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-xl dark:text-white">Auto Navigate Links</h3>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    This is a plugin that will automatically navigate to the link when clicked.
                </p>
                <a href="/param/1?name=John&age=30" data-link class="font-bold underline">Navigate</a>
            </div>
        </div>
    `;

    return render(props.root, HTML)
}