import axios from "axios";

// Base URL of your backend
const API = axios.create({
  baseURL: "http://localhost:5001/api"
});

export default API;
