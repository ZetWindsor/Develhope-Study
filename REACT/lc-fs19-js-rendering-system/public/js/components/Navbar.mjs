import { $listener, $redirect, render } from "../lib/main.mjs";
import { store } from "../store/index.mjs";

const listen = $listener("navbar");

export const Navbar = (props = { root }) => {
    const state = {
        auth: {
            token: store.getState("auth").token,
            user: store.getState("auth").user,
        },
    }

    const redirect = (path) => {
        $redirect(path);
    }

    const handleClick = (event) => {
        if (event.target.classList.contains("nav-link")) {
            event.preventDefault();

            const path = event.target.dataset.path;

            redirect(path);
        } else if (event.target.id === "logout") {
            event.preventDefault();

            store.setState("auth", {
                token: null,
                user: null,
            });

            redirect("/login");
        }
    }

    listen.on("click", handleClick);

    const HTML = () => `
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
            </div>
            <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="#" data-path="/" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Home
                </a>
                ${
                    state.auth.token !== null ? `
                        <a href="#" data-path="/profile" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Profile
                        </a>
                        <a href="#" id="logout" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Logout
                        </a>
                    ` : `
                        <a href="#" data-path="/login" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Login
                        </a>
                    `
                }
                <a href="#" data-path="/not-exist" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    404
                </a>
            </div>
            </div>
        </nav>
    `;

    return render(props.root, HTML, [
        {
            key: "auth",
            exec: () => {
                state.auth.token = store.getState("auth").token;
                state.auth.user = store.getState("auth").user;
            }
        }
    ]);
}