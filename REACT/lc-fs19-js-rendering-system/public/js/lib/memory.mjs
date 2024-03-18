export const internalMemory = {
    get: (key) => {
        if (typeof key !== "string" || key === "") {
            throw new Error("key must be a valid string");
        }

        return JSON.parse(localStorage.getItem(key));
    },
    set: (key, value) => {
        if (typeof key !== "string" || key === "") {
            throw new Error("key must be a valid string");
        }
        if (value === undefined) {
            throw new Error("missing required value");
        }

        localStorage.setItem(key, JSON.stringify(value));
    },
    remove: (key) => {
        if (typeof key !== "string" || key === "") {
            throw new Error("key must be a valid string");
        }

        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    }
}