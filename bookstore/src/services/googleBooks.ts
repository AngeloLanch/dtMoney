import axios from 'axios';

export const key = 'AIzaSyCDhGsHV0iM1B6Yw7sfeEa1B_01Pc0-1x8';
export const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
});
