import axios from "axios";
const url = "https://my-recipes8.herokuapp.com/";

export const baseUrl = axios.create({
  baseURL: url,
  headers: {
    access_token: localStorage.access_token,
  },
});

export const uploadFile = axios.create({
  baseURL: url,
  headers: {
    access_token: localStorage.access_token,
    "content-type": "multipart/form-data",
  },
});
