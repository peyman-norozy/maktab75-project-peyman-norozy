import axios from "axios";
import { userActions } from "./user-slice";

export const loginRequest = (user) => {
  return async (dispatch) => {
    dispatch(userActions.pending(true));

    const sendRequest = async () => {
      const response = await axios.post("http://localhost:3002/auth/login", {
        username: user.userName,
        password: user.password,
      });
      const res = await response;

      if (response.statusText !== "OK") {
        throw new Error("Sending cart data failed.");
      }

      return res;
    };

    try {
      const res = await sendRequest();
      console.log(res.data);
      localStorage.setItem("ACCESS_TOKEYN", res.data.accessToken);
      localStorage.setItem("REFRESH_TOKEN", res.data.refreshToken);
      dispatch(userActions.error({ Loading: true, error: 0 }));

      dispatch(userActions.fulfilled(false));
    } catch (e) {
      console.log(e.response.status);
      dispatch(userActions.error({ Loading: false, error: e.response.status }));
    }
  };
};

export const fetchDataPanel = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3002/products", {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      });

      if (response.statusText !== "OK") {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.data;

      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(
        userActions.addItemToPanel({
          items: cartData,
        })
      );
    } catch (e) {
      console.log(e.message);
      dispatch(userActions.error({ Loading: false, error: e.response.status }));
    }
  };
};
