import axios from "axios";

const api = axios.create({
  baseURL: "https://rocketmovies-server-gg54.onrender.com",
});

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("@rocketmovies:token"));

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
