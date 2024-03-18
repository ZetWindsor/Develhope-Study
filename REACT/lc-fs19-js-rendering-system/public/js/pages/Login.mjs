import { $listener, $redirect, render } from "../lib/main.mjs";
import { store } from "../store/index.mjs";

const listen = $listener("login");

export const Login = (props = { root }) => {
    const state = {
        email: "",
        password: ""
    }

    const redirect = (path) => {
        listen.offAll();

        $redirect(path);
    }

    const handleInput = (event) => {
        if (event.target.classList.contains("login-input")) {
            const { name, value } = event.target;

            state[name] = value;
        }
    }

    const handleSubmit = async (event) => {
        if (event.target.id === "login") {
            event.preventDefault();

            try {
                const response = await fetch("http://localhost:3000/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...state
                    })
                });
                const result = await response.json();

                if (response.ok) {
                    store.setState("auth", { ...result });

                    redirect("/profile");
                } else {
                    console.log(result);
                    throw new Error("Server error");
                }
            } catch (error) {
                throw error;
            }
        }
    }

    listen.on("input", handleInput);
    listen.on("submit", handleSubmit);

    const HTML = () => `
        <div class="w-screen" id="login-page">
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company">
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
                        account</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" id="login" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                                address</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required
                                    class="login-input block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password"
                                    class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
                                        password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password"
                                    required
                                    class="login-input block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                in</button>
                        </div>
                    </form>

                    <p class="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day
                            free trial</a>
                    </p>
                </div>
            </div>

        </div>
    `;

    return render(props.root, HTML);
}