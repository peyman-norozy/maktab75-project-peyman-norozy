import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import SearchProduct from "../components/SearchProduct";
import InventoryManagementCart from "../components/InventoryManagementCart";
import { productActions } from "../store/cart-slice";

const InventoryManagement = () => {
  const data = useSelector((data) => data);
  const dispatch = useDispatch();
  const [priceAndQuantity, setPriceAndQuantity] = useState([]);

  console.log(data);
  console.log(priceAndQuantity);

  const priceDataHandler = (data, id) => {
    setPriceAndQuantity([...priceAndQuantity, { price: data, id: id }]);
  };

  const quantityDataHandler = (data, id) => {
    setPriceAndQuantity([...priceAndQuantity, { quantity: data, id: id }]);
  };

  const saveHandler = () => {
    dispatch(productActions.loadingSpinnerCanger(true));

    let promises = [];

    for (let item of priceAndQuantity) {
      promises.push(
        axios.patch(
          `http://localhost:3002/products/${item.id}`,
          { quantity: item.quantity, price: item.price },
          {
            headers: {
              token: localStorage.getItem("ACCESS_TOKEYN"),
            },
          }
        )
      );
    }

    Promise.all(promises)
      .then(() => {
        axios
          .get("http://localhost:3002/products", {
            headers: {
              token: localStorage.getItem("ACCESS_TOKEYN"),
            },
          })
          .then((res) => {
            dispatch(productActions.addItemToCart(res.data));
          });
      })
      .then(() => {
        console.log("all done");
        dispatch(productActions.loadingSpinnerCanger(false));
        setPriceAndQuantity([]);
      });
  };

  return (
    <>
      <div className="pt-52 pb-8 h-full vm:pt-24">
        <div>
          <div className="pt-10 flex justify-between items-center px-[32px]">
            <h2 className="text-xl font-bold">مدیریت موجودی و قیمت ها</h2>
            <button
              onClick={saveHandler}
              className="bg-[#3CCF4E] text-white px-4 py-2 rounded-md hover:bg-green-400"
            >
              ذخیره
            </button>
          </div>
          <SearchProduct />
          <div className="m-auto w-[94%] mt-10">
            <table className="w-full">
              <thead>
                <tr className="text-xs">
                  <th>کالا</th>
                  <th>قیمت</th>
                  <th>موجودی</th>
                </tr>
              </thead>
              <tbody>
                {data.cart.searchItems.map((item, index) => (
                  <InventoryManagementCart
                    key={index}
                    item={item}
                    priceData={priceDataHandler}
                    quantityData={quantityDataHandler}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryManagement;
