import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import OrdersCart from "../components/OrdersCart";
import { BASE_URL } from "../components/api/axios-constance/useHttp";
import { orders } from "../components/api/axios-constance/useHttp";
import { HEADERS_TOKEN } from "../components/api/axios-constance/useHttp";
import { productActions } from "../store/cart-slice";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [newChecked, setnewChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.loadingSpinnerCanger(true));
    axios
      .get(BASE_URL + orders, HEADERS_TOKEN)
      .then((res) => setOrdersData(res.data))
      .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
      .catch((e) => console.log(e));
  }, [dispatch]);

  const radioChangeHandler = (event) => {
    console.log(event.target.id);
    if (event.target.id === "delivered") {
      setnewChecked(true);
      let deliveryProduct = ordersData.filter(
        (item) => item.delivered === "true"
      );
      console.log(deliveryProduct);
      setFilterData(deliveryProduct);
    } else {
      setnewChecked(false);
      let undeliveryProduct = ordersData.filter(
        (item) => item.delivered === "false"
      );
      setFilterData(undeliveryProduct);
      console.log(undeliveryProduct);
    }
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
                  checked={newChecked}
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
                  checked={!newChecked}
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
                {/* {
                  !newChecked &&
                } */}
                {filterData.map((item) => (
                  <OrdersCart key={item.id} data={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
