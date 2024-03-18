import Post from "./Post"
import { ConstantsPost } from "./constants";
import { useAxios } from "./hooks/useAxios";

function App() {
  const { data, error } = useAxios(ConstantsPost().API_URL);

  if (error) {
    return (
      <h1>{error}</h1>
    );
  }

  return (
    <>
      {data?.posts && data.posts.length > 0 && data.posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}

    </>
  )
}

export default App
