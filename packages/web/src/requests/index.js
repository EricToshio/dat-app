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

export const WatchMatch = async (keys) => {
  return new Promise(resolve => {
    axios({
      method: 'get',
      url: `/watch?key1=${keys[0]}&key2=${keys[1]}`,
      responseType: 'json',
    })
      .then(response => {
        resolve(response.data)
    })
  });
}


export const makeMove = async (position, piece) => {
  return new Promise(resolve => {
    axios({
      method: 'get',
      url: `/make_move?position=${position}&piece=${piece}`,
      responseType: 'json',
    })
      .then(response => {
        resolve(response.data);
      })
  });
}