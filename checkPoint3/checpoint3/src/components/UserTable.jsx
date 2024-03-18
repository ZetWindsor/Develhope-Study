import { useEffect, useState } from "react"
import { Constants } from "../constants"
import axios from "axios"

const UserTable = () => {
    const [data, setData] = useState(null)


    const fetchData = async () => {
        try {
            const response = await axios({
                url: Constants.API_BASE,
                method: "GET"
            })
            setData(response.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>BODY</th>
                            <th>POST ID</th>
                            <th>USERNAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.comments && data.comments.length > 0 ? data.comments.map((comment) => (
                                <tr key={comment.id}>
                                    <td>{comment.id}</td>
                                    <td>{comment.body}</td>
                                    <td>{comment.postId}</td>
                                    <td>{comment.user.username}</td>
                                </tr>
                            ))
                                :
                                <tr><td>loading...</td></tr>
                        }
                    </tbody>
                </table>

            </div>

        </>
    )
}

export default UserTable