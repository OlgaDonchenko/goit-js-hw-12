
import axios from 'axios';

export async function getPictures(name, page = 1, perPage = 15) {
    try {
        const BASE_URL = 'https://pixabay.com/api/';
        const KEY = '42458918-8f01ea81f4ffacec8edc4f5cf';

        const response = await axios.get(BASE_URL, {
            params: {
                key: KEY,
                q: name,
                page: page,
                per_page: perPage,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching pictures from Pixabay API');
    }
}