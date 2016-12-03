import axios from 'axios';
const API = 'http://servup.herokuapp.com/collections/bookmarks';

export function createBookmark(payload) {
  return axios.post(API, payload)
    .then((data) => {
      console.log('the returned data', data);
    })
}

export function fetchBookmarks() {
  return axios.get(API)
    .then((data) => {
      return data.data;
    })
}
