import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { BASE_URL } from "../components/api/axios-constance/useHttp";
import { orders } from "../components/api/axios-constance/useHttp";
import { uiActions } from "../store/ui-slice";
import { productActions } from "../store/cart-slice";

const InternetPayment = () => {
  const data = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
    console.log(event.target.value.length);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(productActions.loadingSpinnerCanger(true));

    const getMyBasket = JSON.parse(localStorage.getItem("myBasket"));
    const getIndividual = JSON.parse(localStorage.getItem("IndividualProfile"));
    const dataMerging = {
      username: getIndividual.name,
      lastname: getIndividual.lastName,
      address: getIndividual.address,
      phone: getIndividual.phone,
      expectAt: getIndividual.date,
      products: getMyBasket,
      prices: data.cart.totalPrice,
      delivered: "false",
    };
    console.log(dataMerging);
    axios
      .post(BASE_URL + orders, dataMerging)
      .then(() => {
        localStorage.removeItem("myBasket");
        localStorage.removeItem("IndividualProfile");
        dispatch(uiActions.basketBalance(0));
        navigate({
          pathname: "/paymentSuccessfully",
          search: "",
        });
      })
      .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
      .catch((e) => {
        console.log(e);
        navigate({
          pathname: "/paymentFailure",
          search: "",
        });
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#ddd]">
      <form onSubmit={submitHandler} className="bg-white px-5">
        <h1>اطلاعات کارت</h1>
        <div>
          <Label innerText={"شماره کارت:"} htmlFor={"cart-number"} />
          <Input
            type={"number"}
            id={"cart-number"}
            maxlength={"16"}
            onInputEvent={inputHandler}
          />
        </div>
        <div>
          <Label innerText={"شماره شناسایی دوم (CVV2):"} htmlFor={"cvv2"} />
          <Input
            type={"number"}
            id={"cvv2"}
            maxlength={"4"}
            onInputEvent={inputHandler}
          />
        </div>
        <div>
          <Label innerText={"تاریخ انقضای کارت:"} />
          <Input type={"number"} maxlength={"2"} onInputEvent={inputHandler} />
          <Input type={"number"} maxlength={"2"} onInputEvent={inputHandler} />
        </div>
        <div>
          <Label innerText={"رمز دوم (اینترنتی):"} htmlFor={"secondPassword"} />
          <Input type={"password"} id={"secondPassword"} />
        </div>
        <div>
          <Label
            type={"email"}
            innerText={"ایمیل (اختیاری):"}
            htmlFor={"email"}
          />
          <Input id={"email"} />
        </div>
        <div>
          <Link to={"/finallyBasket"}>انصراف</Link>
          <Button type={"submit"} innerText={"پرداخت"} />
        </div>
      </form>
    </div>
  );
};

export default InternetPayment;
