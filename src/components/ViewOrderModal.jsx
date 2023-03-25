import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomerOrderSCart from "./CustomerOrdersCart";
import { productActions } from "../store/cart-slice";
import Button from "./button/Button";
import { USER_API } from "./api/axios-constance/useHttp";
import { orders } from "./api/axios-constance/useHttp";

const ViewOrderModal = (props) => {
  const { modalData, addUndelivryToDelivery } = props;
  const [newProduct, setNewProduct] = useState();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state);

  const modalID = searchParams.get("id");
  console.log(modalData);

  useEffect(() => {
    const exatProduct = modalData.find((item) => item.id === +modalID);
    console.log(exatProduct);
    setNewProduct(exatProduct);
  }, [modalData, modalID]);

  console.log(newProduct);

  const closeViewOrderHandler = () => {
    navigate({
      pathname: "/panel/orders",
    });
    dispatch(productActions.newViewOrderDisplay(false));
  };

  const deliveryTime = newProduct
    ? new Date(newProduct.expectAt).toLocaleDateString("fa-IR")
    : "";
  const orderTime = newProduct
    ? new Date(newProduct.createdAt).toLocaleDateString("fa-IR")
    : "";

  const deliveryButtonHandler = (event) => {
    console.log(event.target.id);
    dispatch(productActions.loadingSpinnerCanger(true));

    USER_API.patch(
      orders + `/${event.target.id}`,
      { delivered: "true" },
      {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      }
    )
      .then(() => dispatch(productActions.newViewOrderDisplay(false)))
      .then(() => addUndelivryToDelivery())
      .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="bg-[#cacaca83] min-h-full w-full absolute top-0 pt-36 pb-4 flex justify-center items-start important_zIndex">
        <div className="bg-[#eee] w-[50%] p-[20px] rounded-[10px] flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1>نمایش سفارش</h1>
            <span
              onClick={closeViewOrderHandler}
              className="bg-red-600 text-white rounded-full w-[22px] h-[22px] flex justify-center cursor-pointer"
            >
              ×
            </span>
          </div>
          <div className="text-xs flex flex-col gap-4 w-[80%] m-auto">
            <div className="flex">
              <span className="flex-1">نام مشتری :</span>
              <span className="flex-1">{`${newProduct && newProduct.username} ${
                newProduct && newProduct.lastname
              }`}</span>
            </div>
            <div className="flex">
              <span className="flex-1">آدرس :</span>
              <span className="flex-1">{newProduct && newProduct.address}</span>
            </div>
            <div className="flex">
              <span className="flex-1">تلفن :</span>
              <span className="flex-1">{newProduct && newProduct.phone}</span>
            </div>
            <div className="flex">
              <span className="flex-1">زمان تحویل :</span>
              <span className="flex-1">{deliveryTime}</span>
            </div>
            <div className="flex">
              <span className="flex-1">زمان سفارش :</span>
              <span className="flex-1">{orderTime}</span>
            </div>
          </div>
          <table className="m-auto w-[100%] text-xs">
            <thead>
              <tr>
                <th>کالا</th>
                <th>قیمت</th>
                <th>تعداد</th>
              </tr>
            </thead>
            <tbody>
              {newProduct &&
                newProduct.products.map((item) => (
                  <CustomerOrderSCart key={item.id} modalCartData={item} />
                ))}
            </tbody>
          </table>
          {!data.cart.deliveredButton && (
            <Button
              type={"button"}
              innerText={"تحویل شد"}
              id={newProduct && newProduct.id}
              onClickEvent={deliveryButtonHandler}
              className={
                "bg-[#319cff] text-white hover:bg-[#679cff] w-[20%] m-auto text-xs py-[4px] px-[10px] rounded-md"
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ViewOrderModal;
