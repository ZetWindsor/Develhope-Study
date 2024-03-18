import { useLocation, useParams, useSearchParams } from "react-router-dom";

const users = [
    {
        id: 1,
        full_name: "raffaele",
        age: 24,
    },
    {
        id: 2,
        full_name: "ale",
        age: 24,
    },
    {
        id: 3,
        full_name: "francesco",
        age: 24,
    },
];

const User = () => {
    const params = useParams();
    const [query, setQuery] = useSearchParams();
    const location = useLocation();
    console.log(location);
    const user = users.find(item => item.id == params.user_id);
    
    const handleClick = () => {
        setQuery({ ...Object.fromEntries(query), page: Math.round(Math.random() * 100), is_active: true })
    }

    return (
        <>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <pre>{JSON.stringify(Object.fromEntries(query), null, 2)}</pre>
            <button onClick={handleClick}>change</button>
        </>
    )
}

export default User;