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

export const watchMatch = async (shareKey) => {
  return new Promise(resolve => {
    axios({
      method: 'get',
      url: `/watch?key=${shareKey}`,
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

export const getShareKey = async () => {
  return new Promise(resolve => {
    axios({
      method: 'get',
      url: '/sharing',
      responseType: 'json',
    })
      .then(response => {
        resolve(response.data);
      })
  });
};