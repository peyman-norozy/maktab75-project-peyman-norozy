import axios from "axios";
import { productActions } from "./cart-slice";

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
