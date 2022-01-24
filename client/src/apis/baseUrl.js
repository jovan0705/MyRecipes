import axios from "axios";

export const baseUrl = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    access_token: localStorage.access_token,
  },
});

export const uploadFile = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    access_token: localStorage.access_token,
    "content-type": "multipart/form-data",
  },
});
