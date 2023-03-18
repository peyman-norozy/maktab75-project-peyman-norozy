import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { productActions } from "../store/cart-slice";
import Button from "./button/Button";

const OrdersCart = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registrationTime = new Date(data.createdAt).toLocaleDateString("fa-IR");

  const viewOrderModalHandler = (event) => {
    console.log(event.target.id);
    navigate({
      pathname: "/panel/orders",
      search: `?id=${event.target.id}`,
    });
    dispatch(productActions.newViewOrderDisplay(true));
  };

  return (
    <>
      <tr>
        <td className="text-center">{`${data.username} ${data.lastname}`}</td>
        <td className="text-center">{data.prices.toLocaleString()}</td>
        <td className="text-center">{registrationTime}</td>
        <td className="text-center">
          <Button
            type={"button"}
            id={data.id}
            innerText={"بررسی سفارش"}
            onClickEvent={viewOrderModalHandler}
            className={
              "bg-[#009225] text-white py-[6px] px-[8px] rounded-[4px] hover:bg-[#00ff40]"
            }
          />
        </td>
      </tr>
    </>
  );
};

export default OrdersCart;
