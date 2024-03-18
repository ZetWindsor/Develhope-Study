import { $listener, $redirect, render } from "../lib/main.mjs";
import { store } from "../store/index.mjs";

const listen = $listener("profile");

export const Profile = (props = { root }) => {
    const auth = store.getState("auth");

    const state = {
        user: auth?.user || null,
        token: auth?.token || null,
    }

    const handleLogout = (event) => {
        if (event.target.id === "logout") {
            store.setState("auth", {
                token: null,
                user: null,
            });

            listen.offAll();

            $redirect("/login");
        }
    }

    listen.on("click", handleLogout);

    const HTML = () => `
        <div class="w-screen pt-24 flex justify-center items-center flex-col" id="profile-page">
            <div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square">
                <div class="space-y-4 text-center divide-y dark:divide-gray-700">
                    <div class="my-2 space-y-1">
                        <h2 id="full_name" class="text-xl font-semibold sm:text-2xl">${state.user.first_name} ${state.user.last_name}</h2>
                        <p id="user_email" class="px-5 text-xs sm:text-base dark:text-gray-400">${state.user.email}</p>
                    </div>
                    <div class="flex justify-center pt-2 space-x-4 align-center">
                        <button id="logout" class="border py-1 px-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    return render(props.root, HTML);
}