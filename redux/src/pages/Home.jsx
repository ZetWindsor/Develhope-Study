import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
            <h1>HOME</h1>
            <div>
                <Link to="/login">login</Link>
            </div>
        </>
    )
}

export default Home;