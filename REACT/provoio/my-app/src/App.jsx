import { useEffect, useState } from "react"
import { Constants } from "./constants"
import Card from "./components/Card"
import axios from "axios"

const App = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
        const response = await axios({
        url: Constants('comments').API_URL,
        method: "GET"
      })
      setData(response.data)
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        {data.comments && data.comments.length > 0 && data.comments.map(comment => (
          <Card key={comment.id} data={comment} />
        ))}
      </div>
    </>
  )
}

export default App
