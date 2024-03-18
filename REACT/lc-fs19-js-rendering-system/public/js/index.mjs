import { $getSlotRoot, Router } from "./lib/main.mjs";
import { plugins } from "./lib/plugins.mjs";

import { Home } from "./pages/Home.mjs";
import { Login } from "./pages/Login.mjs";
import { Param } from "./pages/Param.mjs";
import { Profile } from "./pages/Profile.mjs";

import { Counter } from "./components/Counter.mjs";
import { Navbar } from "./components/Navbar.mjs";

import { store } from "./store/index.mjs";

const $root = document.querySelector("#root");
const $head = document.querySelector("#head");

Router([
    {
        name: "navbar",
        path: "*",
        element: () => {
            Navbar({ root: $head })();
        }
    },
    { 
        name: "home",
        path: "/",
        element: () => {
            Home({ root: $root })(() => {
                Counter({ root: $getSlotRoot("counter") })();
            });
        } 
    },
    { 
        name: "login",
        path: "/login",
        element: () => {
            Login({ root: $root })();
        }
    },
    { 
        name: "profile",
        path: "/profile",
        element: () => {
            Profile({ root: $root })();
        },
        protectLogic: () => store.getState("auth").token !== null,
        redirectOnProtected: "/login",
    },
    {
        name: "param",
        path: "/param/:id",
        element: () => {
            Param({ root: $root })();
        }
    }
]).plugins.register([
    plugins.$useAutoNavigateLinks(),
]);