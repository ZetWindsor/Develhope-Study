import { Link, useParams } from "react-router-dom"

const Product = () => {
    const { id } = useParams()

    return (
        <>
            <div>
                <h3>Product {id}</h3>
                <Link to='/products'>back</Link>
            </div>
        </>
    )
}

export default Product