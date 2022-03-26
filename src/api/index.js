import axios from "axios";
const API = axios.create({ baseURL: "https://movie-task.vercel.app/api" }); 

export const getAllMovies = (page) => API.get(`/popular?${new URLSearchParams({page}).toString()}`)
export const getSIngleMovies = (movieID) => API.get(`/movie?${new URLSearchParams({movieID}).toString()}`)
export const getSearchByNameResults = (page,query) => API.get(`/search?${new URLSearchParams({page, query}).toString()}`)

