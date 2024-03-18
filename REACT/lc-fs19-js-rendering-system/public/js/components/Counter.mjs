import { $listener, render } from "../lib/main.mjs";
import { store } from "../store/index.mjs";

const listen = $listener("counter");

export const Counter = (props = { root }) => {
    const state = {
        count: store.getState("counter").value || 0,
    }

    const handleInput = (event) => {
        if (event.target.classList.contains("counter-input")) {
            const { name, value } = event.target;

            state[name] = value;
        }
    }

    const handleSubmit = (event) => {
        if (event.target.id === "counter") {
            event.preventDefault();

            state.count++;
            store.setState("counter", { value: state.count });
        }
    }

    const handleReset = (event) => {
        if (event.target.id === "counter") {
            event.preventDefault();

            state.count = 0;
            store.setState("counter", { value: state.count });
        }
    }

    listen.on("input", handleInput);
    listen.on("submit", handleSubmit);
    listen.on("reset", handleReset);

    store.on("PATH_CHANGE", (path) => {
        if(path !== "/") {
            listen.offAll();
        }
    });

    const HTML = () => `
        <div class="flex justify-center items-center flex-col mt-6 p-12 border-gray-50 shadow rounded-xl">
            <h3 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-xl dark:text-white">Counter</h3>
            <form id="counter">
                <input type="number" name="count" class="counter-input text-center border border-gray-200 rounded py-2 px-4" value="${state.count}" />
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+1</button>
                <button type="reset" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Reset</button>
            </form>
        </div>
    `;

    return render(props.root, HTML, [
        { key: "counter" },
    ]);
}