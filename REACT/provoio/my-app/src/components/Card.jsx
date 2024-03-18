const Card = ({ data }) => {
    const { id, body, postId } = data
    return (
        <>
            <div>
                <h1>id {id}</h1>
                <h2>{body}</h2>
                <h2>{postId}</h2>
                <h2>{data.user.id}</h2>
                <h2>{data.user.username}</h2>
                <hr />
            </div>
        </>
    )
}

export default Card