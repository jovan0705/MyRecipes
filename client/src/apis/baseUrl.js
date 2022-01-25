import axios from "axios";
const url = "http://localhost:5000";

export const baseUrl = axios.create({
  baseURL: url,
});

export const uploadFile = axios.create({
  baseURL: url,
  headers: {
    access_token: localStorage.access_token,
    "content-type": "multipart/form-data",
  },
});
