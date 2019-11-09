import axios from 'axios';

export const createBoard = async () => {
  return new Promise(resolve => {
    axios({
      method: 'get',
      url: '/create',
      responseType: 'json'
    })
      .then(function (response) {
        resolve(response.data)
      });
  })
}

export const joinMatch = async (key) => {
  console.log(`/join?key=${key}`);
  return new Promise(resolve => {
    axios({
      method: 'get',
      url: `/join?key=${key}`,
      responseType: 'json',
    })
      .then(response => {
        resolve(response.data)
    })
  });
}