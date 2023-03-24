import axios from "axios";

export const BASE_URL = "http://localhost:3002";
export const products = "/products";
export const nav = "/nav";
export const login = "/auth/login";
export const orders = "/orders";

export const HEADERS_TOKEN = {
  headers: {
    token: localStorage.getItem("ACCESS_TOKEYN"),
  },
};

export const ADMIN_API = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: localStorage.getItem("ACCESS_TOKEYN"),
  },
});

export const USER_API = axios.create({
  baseURL: BASE_URL,
});
