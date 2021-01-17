import axios from "axios";

export const URL = "http://localhost:3000/";

const defaultAxios = axios.create({
  baseURL: URL,
});

export default defaultAxios;
