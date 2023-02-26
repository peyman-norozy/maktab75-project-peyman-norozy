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
      dispatch(userActions.fulfilled(false));
      // dispatch(
      //   uiActions.showNotification({
      //     status: "success",
      //     title: "Success!",
      //     message: "Sent cart data successfully!",
      //   })
      // );
    } catch (e) {
      console.log(e);
      dispatch(userActions.error({ Loading: false, error: e.message }));

      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "Error!",
      //     message: "Sending cart data failed!",
      //   })
      // );
    }
  };
};
