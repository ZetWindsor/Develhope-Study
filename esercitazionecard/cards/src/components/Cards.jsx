import { useEffect, useState } from "react";
import { Constants } from "../constants";

const Cards = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(Constants('posts').API_BASE);
                const result = await response.json();
                setPosts(result.posts);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <div className="flex flex-wrap gap-10">
                {posts.length > 0 && posts.map(posts => (

                    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={posts.id}>
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{posts.title}</div>
                            <p className="text-gray-700 text-base">{posts.body}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {posts.tags.map((tag) => (
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>))
                }</div>
        </>
    )
}

export default Cards;