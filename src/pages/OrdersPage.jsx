import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import OrdersCart from "../components/OrdersCart";
import { BASE_URL } from "../components/api/axios-constance/useHttp";
import { orders } from "../components/api/axios-constance/useHttp";
import { HEADERS_TOKEN } from "../components/api/axios-constance/useHttp";
import { productActions } from "../store/cart-slice";
import ViewOrderModal from "../components/ViewOrderModal";

const Orders = () => {
  const checkedData = useSelector((state) => state);
  const [ordersData, setOrdersData] = useState([]);

  const dispatch = useDispatch();

  const getDataFromServer = useCallback(() => {
    dispatch(productActions.loadingSpinnerCanger(true));
    axios
      .get(BASE_URL + orders, HEADERS_TOKEN)
      .then((res) => setOrdersData(res.data))
      .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
      .catch((e) => console.log(e));
  }, [dispatch]);

  useEffect(() => {
    getDataFromServer();
  }, [getDataFromServer]);

  const radioChangeHandler = (event) => {
    console.log(event.target.id);
    if (event.target.id === "delivered") {
      dispatch(productActions.newCheckedOrders(true));
      dispatch(productActions.deliveredButtonHandle(true));
    } else {
      dispatch(productActions.newCheckedOrders(false));
      dispatch(productActions.deliveredButtonHandle(false));
    }
  };

  const handelDelivery = () => {
    getDataFromServer();
  };

  return (
    <>
      <div className="pt-52 pb-8 h-full vm:pt-24">
        <div>
          <div className="pt-10 flex justify-between items-center px-[32px]">
            <h2 className="text-xl font-bold">مدیریت سفارش ها</h2>
            <div className="flex flex-col justify-center items-start gap-8 vm:flex-row">
              <div className="flex justify-center items-center gap-1">
                <Label
                  htmlFor={"delivered"}
                  innerText={"سفارش های تحویل شده"}
                />
                <Input
                  type={"radio"}
                  id={"delivered"}
                  name={"order"}
                  checked={checkedData.cart.checked}
                  value={"delivered"}
                  onChangeEvent={radioChangeHandler}
                />
              </div>
              <div className="flex justify-center items-center gap-1">
                <Label
                  htmlFor={"undelivery"}
                  innerText={"سفارش های در انتظار ارسال"}
                />
                <Input
                  type={"radio"}
                  id={"undelivery"}
                  name={"order"}
                  checked={!checkedData.cart.checked}
                  value={"undelivery"}
                  onChangeEvent={radioChangeHandler}
                />
              </div>
            </div>
          </div>

          <div className="m-auto w-[94%] mt-10">
            <table className="w-full">
              <thead>
                <tr className="text-xs">
                  <th>نام کاربر</th>
                  <th>مجموع مبلغ</th>
                  <th>زمان ثبت سفارش</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-[.8rem]">
                {!checkedData.cart.checked
                  ? ordersData.map((item) =>
                      item.delivered === "false" ? (
                        <OrdersCart key={item.id} data={item} />
                      ) : (
                        ""
                      )
                    )
                  : ordersData.map((item) =>
                      item.delivered === "true" ? (
                        <OrdersCart key={item.id} data={item} />
                      ) : (
                        ""
                      )
                    )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {checkedData.cart.viewOrderModalDisplay && (
        <ViewOrderModal
          modalData={ordersData}
          addUndelivryToDelivery={handelDelivery}
        />
      )}
    </>
  );
};

export default Orders;
