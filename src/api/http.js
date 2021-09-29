import axios from 'axios';

export default axios.create({
    baseURL: 'https://data.police.uk/api',
    headers: {
        'Content-type': 'application/json',
    },
});
