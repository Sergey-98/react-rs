import axios from 'axios';

export default class getService {
  static async getAll(path: string) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${path}`);
    return response;
  }
  static async getFilms(answer: string) {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=7347c4fe&s=${answer}`);
    return response;
  }
}
