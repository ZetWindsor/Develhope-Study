import axios from 'axios';

const fetchAxiosProva = async () => {
    const url = 'https://dummyjson.com/posts';

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('sono ancora scarso con axios');
    }
};

export default fetchAxiosProva;
