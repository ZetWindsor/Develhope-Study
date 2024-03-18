import { internalMemory } from "./memory.mjs";
import { Observer } from "./observer.mjs";

export class State extends Observer {
    #state;
    #permanentKeys;

    constructor(initialState = {}, permanentKeys = []) {
        super();
        this.#state = initialState;
        this.#permanentKeys = permanentKeys;
    }

    getState(key) {
        return key ? this.#state[key] : this.#state;
    }

    setState(key, newState) {
        this.#state = { ...this.#state, [key]: { ...this.#state[key], ...newState } };
        if (this.#permanentKeys.indexOf(key) !== -1) internalMemory.set(key, this.#state[key]);
        this.emit("STATE_CHANGE", key, this.#state);
    }
}