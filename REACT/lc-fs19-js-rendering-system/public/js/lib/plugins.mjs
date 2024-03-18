import { $redirect } from "./main.mjs";

export const plugins = {
    $useAutoNavigateLinks: (data_attribute_name = "link") => {
        return {
            name: "$useAutoNavigateLinks",
            exec: () =>  {
                document.addEventListener("click", (event) => {
                    if (event.target.dataset[data_attribute_name] !== undefined) {
                        event.preventDefault();
                        $redirect(event.target.href.replace(window.location.origin, ""));
                    }
                });
            }
        
        }
    }
}