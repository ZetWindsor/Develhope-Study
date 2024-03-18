const Card = ({ data }) => {
    const { id, title, body, userId } = data
    return (
        <>
            <div>
                <h1>id {id}</h1>
                <h2>title {title}</h2>
                <h2>description {body}</h2>
                <h2>price {userId}</h2>
            </div>
        </>
    );
}

export default Card;
