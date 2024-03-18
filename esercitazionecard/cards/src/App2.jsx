import React, { useEffect, useState } from "react";
import { Constants } from "./constants";
import Card2 from "./components/Cards2";

const App2 = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const response = await fetch(Constants('posts').API_BASE);
                const result = await response.json();
                setPosts(result.posts);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData2();
    }, [])

    return (
        <>
            <div className="bg-gradient-to-b from-red-500 to-blue-800">
                <div className="flex flex-wrap gap-10 pt-4 pl-4 ">
                    {posts.length > 0 && posts.map(post => (
                        <Card2
                            key={post.id}
                            /*   title={post.title}
                              body={post.body}
                              tags={post.tags} */
                            {...post}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App2;
