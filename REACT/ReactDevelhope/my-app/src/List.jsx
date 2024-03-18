
export function List({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}><h2>{item.name}</h2> <p>eta' : {item.age}</p> </li>))}
        </ul>
    )
}