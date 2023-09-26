import axios from 'axios';
import {baseUrl} from './MovieApiKey'


export const movieApi = axios.create({ baseURL: "https://www.omdbapi.com/" });
export const authApi = axios.create({ baseURL: "http://localhost:4000" });

export const instance = axios.create({baseURL: baseUrl});