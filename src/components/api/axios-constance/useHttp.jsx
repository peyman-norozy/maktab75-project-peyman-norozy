export const BASE_URL = "http://localhost:3002";
export const products = "/products";
export const nav = "/nav";
export const login = "/auth/login";

export const HEADERS_TOKEN = {
  headers: {
    token: localStorage.getItem("ACCESS_TOKEYN"),
  },
};
