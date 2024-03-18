import { useState, useEffect } from "react";

const Pokedex2 = () => {
    const [bookName, setbookName] = useState("");
    const [bookData, setbookData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (bookData) {
            console.log("book Data:", bookData);
        }
    }, [bookData]);

    const handleSearchbook = async () => {
        try {
            const response = await fetch(`https://openlibrary.org/search.json?title=${bookName}`);
            const result = await response.json();
            console.log(bookData);

            if (response.ok) {
                setbookData(result);
                setError(null);
            }

            if (bookName === "") {
                setError(`inserire nome book`);
                return;
            }

        } catch (error) {
            setError(`non esiste o scritto male`);
            setbookData(null);
        }
    };

    return (
        <>
        <div className="mt-20 ml-20">
            <input type="text" value={bookName} onChange={(event) => setbookName(event.target.value)} />
            <button onClick={handleSearchbook}>cerca</button>
            {error && <h1>{error}</h1>}

            <div>
                <table>
                    
                    <tbody>
                        {bookData?.docs && bookData.docs.length > 0 ? bookData.docs.map((docs) => (
                            <tr key={docs.isbn}>
                                <td>{docs.title}</td>
                                <td>{docs.author_name}</td>
                                <td>{docs.number_of_pages_median}</td>
                                <td>{docs.first_publish_year}</td>
                            </tr>
                        ))

                            :
                            <tr><td>loading...</td></tr>

                        }</tbody>
                </table>

            </div>
</div>

        </>
    );
};

export default Pokedex2;
