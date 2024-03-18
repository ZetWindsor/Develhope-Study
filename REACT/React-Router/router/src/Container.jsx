import { useState } from "react"

export function Container({ title, children }) {
    const [collapse, setCollapse] = useState(false)

    function handleToggleCollapse() {
        setCollapse((nomeVariabile) => !nomeVariabile)
    }

    return (
        <div className="app">
            <div className="app-title">{title} <button onClick={handleToggleCollapse}>{collapse ? 'mostra' : 'nascondi'}</button></div>
            {!collapse && <div className="app-children">{children}</div>}
            {/* se lo faccio partire negato lo mostra e vice versa*/}
        </div>
    )
}