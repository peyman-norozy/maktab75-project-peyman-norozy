import axios from "axios";
import { productActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3002/products");

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
        productActions.addItemToCart({
          items: cartData,
        })
      );
    } catch (error) {
      console.log("you have a error!");
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await axios.post("http://localhost:3002/navAuth", {
        showNavBar: false,
      });

      if (response.statusText !== "OK") {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      // dispatch(
      //   uiActions.showNotification({
      //     status: "success",
      //     title: "Success!",
      //     message: "Sent cart data successfully!",
      //   })
      // );
    } catch (error) {
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

export const fetchNavstate = (reusableData) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3002/nav");

      if (response.statusText !== "OK") {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.data;

      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
      if (reusableData === "navChanging") {
        dispatch(uiActions.addOrRemoveNavBar(cartData.showNavBar));
      }
      // dispatch(
      //   productActions.addItemToCart({
      //     items: cartData,
      //   })
      // );
    } catch (error) {
      console.log("you have a error!");
    }
  };
};

export const sendNavstate = (mood) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await axios.post("http://localhost:3002/nav", {
        showNavBar: mood,
      });

      if (response.statusText !== "OK") {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      // dispatch(
      //   uiActions.showNotification({
      //     status: "success",
      //     title: "Success!",
      //     message: "Sent cart data successfully!",
      //   })
      // );
    } catch (error) {
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
