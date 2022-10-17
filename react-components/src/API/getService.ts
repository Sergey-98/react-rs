import axios from 'axios';

export function getSearchData(path: string) {
  return axios.get(`https://swapi.dev/api/people/?search=${path}`);
}

export function getSubData(path: string) {
  return axios.get(`${path}`);
}

export function getFilms(answer: string) {
  return axios.get(`http://www.omdbapi.com/?apikey=7347c4fe&s=${answer}`);
}
