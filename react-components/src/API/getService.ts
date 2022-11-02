import axios from 'axios';

const _apiKey = '29f929b223daa678d61e9c7543364c5e';
const _url = 'https://gateway.marvel.com:443/v1/public/';
export function getFilms(answer: string) {
  return axios.get(`http://www.omdbapi.com/?apikey=7347c4fe&s=${answer}`);
}

export function getAllComics(limit: number, offset: number) {
  return axios.get(`${_url}comics?&limit=${limit}&offset=${offset}&apikey=${_apiKey}`);
}

export function getComic(id: number) {
  return axios.get(`${_url}comics/${id}?apikey=${_apiKey}`);
}

export function getSearchData(answer: string, limit: number) {
  return axios.get(
    `${_url}comics?title=${answer.split(' ').join('%20')}&limit=${limit}&apikey=${_apiKey}`
  );
}
