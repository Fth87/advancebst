import axios from 'axios';

export const getProducts = (callback) => {
  axios.get('https://fakestoreapi.com/products').then((res) => {
    callback(res.data);
  });
};

// ? Untuk menambahkan product

export const addProduct = (payload) => {
  axios.post('https://fakestoreapi.com/products'), payload;
};
