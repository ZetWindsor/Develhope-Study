import { useEffect, useState } from "react"

const CustomTable = ({ url, isLoaded }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (isLoaded && url != "") {
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const result = await response.json();

                    if (response.ok) {
                        setData(result);
                    } else {
                        throw new Error("Data not found");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData();
        } else {
            setData([]);
        }
    }, [isLoaded]);

    return (
        <>
            <table className="table-auto">
                <thead>
                    <tr>
                        {
                            data.length > 0 && Object.keys(data[0]).map((key, index) => (
                                <th
                                    key={`th-${index}`}
                                    className="px-4 py-2">{key}</th>
                            ))
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ?
                        data.map((item, index) => (
                            <tr key={`tr-${index}`}>
                                {
                                    Object.values(item).map((value) => (
                                        <td key={`tr-${index}-td-${value.id}`} className="border px-4 py-2">{value}</td>
                                    ))
                                }
                                <td className="border px-4 py-2">Intro to JavaScript</td>
                                <td className="border px-4 py-2">Chris</td>
                                <td className="border px-4 py-2">1,280</td>
                            </tr>
                        ))
                        :
                            <tr>
                                <td>
                                    Empty Data
                                </td>
                            </tr>
                    }

                </tbody>
            </table>
        </>
    )
}

export default CustomTable