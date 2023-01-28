import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
    const api = axios.create({
        baseURL: "https://pokeapi.co/api/v2/pokemon"
    })

    return api;
}