import React from "react";

const Card2 = (posts) => {
    const { id, title, body, tags } = posts;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={id}>
            <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{body}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag) => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Card2;
