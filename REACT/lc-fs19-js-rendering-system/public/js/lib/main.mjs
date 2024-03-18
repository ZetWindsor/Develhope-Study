import { _404 } from "../pages/_404.mjs";
import { store } from "../store/index.mjs";
import { plugins } from "./plugins.mjs";

export const $getSlotRoot = (slot_name) => {
    return document.querySelector(`slot[name="${slot_name}"]`);
}

export const $getRouterRoot = (id) => {
    return document.querySelector(`#${id}`);
}

export const $listener = (component_name) => {
    const listeners = new Map();

    if (!listeners.has(component_name)) {
        listeners.set(component_name, []);
    }

    return {
        on: (event, cb) => {
            document.addEventListener(event, cb);
            listeners.get(component_name).push({ event, cb });
        },
        off: (event) => {
            const cb = listeners.get(component_name).find(({ event: _event }) => event === _event)?.cb;
            document.removeEventListener(event, cb);
        },
        offAll: () => {
            listeners.get(component_name).forEach(({ event, cb }) => {
                document.removeEventListener(event, cb);
            });
        }
    }
}

export const render = ($root, HTML, watchers = []) => {
    const _render = (cb) => {
        $root.innerHTML = HTML();
    
        if (typeof cb === "function") cb();
    }

    watchers.forEach(({ key, exec }) => store.on("STATE_CHANGE", (_key, state) => {
        if (key === _key) {
            if(typeof exec === "function") exec();
            _render();
        }
    }));

    return _render;
}

export const $redirect = (path = window.location.hash.substring(1) || "/") => {
    window.location.hash = path;
    store.emit("PATH_CHANGE", path);
}

export const $useQuery = () => {
    const query = window.location.hash.substring(1).split("?")[1].split("&").reduce((acc, curr) => {
        const [key, value] = curr.split("=");
        return { ...acc, [key]: value };
    }, {});

    return query;
}

export const $useParams = (routeName) => {
    const route = routesMap.get(routeName);
    const path = (window.location.hash.substring(1) || "/").split("?")[0];
    const pathSplit = path.split("/");
    const _pathSplit = route.path.split("/");
    const params = {};
    let match = true;

    if (pathSplit.length === _pathSplit.length) {
        for (let i = 0; i < _pathSplit.length; i++) {
            if (_pathSplit[i].startsWith(":")) {
                params[_pathSplit[i].substring(1)] = pathSplit[i];
            } else if (_pathSplit[i] !== pathSplit[i]) {
                match = false;
                break;
            }
        }
    } else {
        match = false;
    }

    return match ? params : null;
}

const routesMap = new Map();

export const Router = (routes) => {
    const allHistory = new Map();

    store.on("PATH_CHANGE", (path) => {
        redirect(path);
    });

    routes.forEach((route) => {
        if (route.name) {
            if (!routesMap.has(route.name)) {
                routesMap.set(route.name, route);
            }
        }
    });

    if (!routesMap.has("404")) {
        routesMap.set("404", {
            name: "404",
            path: "*",
            element: () => {
                _404({ root: $getRouterRoot("root") })();
            }
        });
    }

    const redirect = (path = window.location.hash.substring(1) || "/") => {
        let matches = 0;

        routes.forEach(({ name = null, path: _path, element, protectLogic, redirectOnProtected = "/login" }) => {
            if (name) {
                if (!allHistory.has(name)) {
                    allHistory.set(name, { path: _path, element, protectLogic, redirectOnProtected, rendered: false });
                }
            }
            
            if (_path === "*" && name !== "404") {
                if (!name || !allHistory.get(name).rendered) {
                    element();
                    if (name) allHistory.get(name).rendered = true;
                }
            } else {
                if (_path.indexOf(":") === -1 && _path === path) {
                    if (typeof protectLogic === "function") {
                        if (protectLogic()) {
                            element();
                            matches++;
                        } else {
                            redirect(redirectOnProtected);
                        }
                    } else {
                        element();
                        matches++;
                    }
                } else {
                    const pathSplit = path.split("/");
                    const _pathSplit = _path.split("/");
                    const params = {};
                    let match = true;

                    if (pathSplit.length === _pathSplit.length) {
                        for (let i = 0; i < _pathSplit.length; i++) {
                            if (_pathSplit[i].startsWith(":")) {
                                params[_pathSplit[i].substring(1)] = pathSplit[i];
                            } else if (_pathSplit[i] !== pathSplit[i]) {
                                match = false;
                                break;
                            }
                        }
                    } else {
                        match = false;
                    }

                    if (match) {
                        if (typeof protectLogic === "function") {
                            if (protectLogic()) {
                                element(params);
                                matches++;
                            } else {
                                redirect(redirectOnProtected);
                            }
                        } else {
                            element(params)
                            matches++;    
                        };
                    }
                }
            }
        });

        if (matches === 0) {
            routesMap.get("404").element();
        }
    }

    redirect();

    return {
        plugins: {
            register: (_plugins) => {
                _plugins.forEach((plugin) => {
                    if (Object.keys(plugins).indexOf(plugin.name) !== -1) {
                        plugin.exec();
                    }
                });
            }
        }
    }
}