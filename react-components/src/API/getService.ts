import axios from 'axios';
import { PromiseFilms, Data } from 'types/types';

export async function getAll(path: string): Promise<Data> {
  return await axios.get(`https://jsonplaceholder.typicode.com/${path}`);
}
export async function getFilms(answer: string): Promise<PromiseFilms> {
  return await axios.get(`http://www.omdbapi.com/?apikey=7347c4fe&s=${answer}`);
}
