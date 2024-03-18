import { State } from "../lib/state.mjs";
import { internalMemory } from "../lib/memory.mjs";

export const store = new State({
    auth: {
        token: internalMemory.get("auth")?.token || null,
        user: internalMemory.get("auth")?.user || null,
    },
    counter: {
        value: internalMemory.get("counter")?.value || 0,
    },
}, ["auth", "counter"]);