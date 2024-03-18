import Card from "./components/Card";
import { Constants } from "./constats";
import { useAxios } from "./hooks/useAxios";

function App() {
  const { data, error } = useAxios(Constants().API_URL);

  
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }


  return (
    <div>
      {data?.posts && data.posts.length > 0 ? (
        data.posts.map(post =>
          <Card key={post.id} data={post} />)
      ) : <div>errore</div>
      }
    </div>)
}

export default App;
