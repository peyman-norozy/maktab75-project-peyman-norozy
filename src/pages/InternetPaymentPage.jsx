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
    <div className="min-h-[39rem] flex justify-center items-center bg-[#ddd]">
      <form
        onSubmit={submitHandler}
        className="bg-white px-8 pb-8 flex flex-col gap-8 rounded-[15px]"
      >
        <div className="flex justify-start ">
          <h1 className="bg-[#ffeef3] text-[#E6457B] border-b-orange-700 border-b-2 font-bold py-[12px] px-[8px]">
            اطلاعات کارت
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"شماره کارت:"}
              htmlFor={"cart-number"}
              className={"font-bold"}
            />
            <span className="text-[10px]">
              شماره 16 رقمی درج شده بر روی کارت
            </span>
          </div>
          <Input
            type={"number"}
            id={"cart-number"}
            maxlength={"16"}
            className={"outline-none border-2 flex-1 rounded-[10px] pr-[6px]"}
            onInputEvent={inputHandler}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"شماره شناسایی دوم (CVV2):"}
              htmlFor={"cvv2"}
              className={"font-bold"}
            />
            <span className="text-[10px]">
              شماره 3 یا 4 رقمی درج شده بر روی کارت
            </span>
          </div>
          <Input
            type={"number"}
            id={"cvv2"}
            maxlength={"4"}
            onInputEvent={inputHandler}
            className={"outline-none border-2 flex-1 rounded-[10px] pr-[6px]"}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col flex-1">
            <Label innerText={"تاریخ انقضای کارت:"} className={"font-bold"} />
            <span className="text-[10px]">
              دو رقم ماه / دو رقم آخر سال را وارد کنید
            </span>
          </div>
          <div className="flex items-center flex-1 h-full">
            <Input
              type={"number"}
              maxlength={"2"}
              onInputEvent={inputHandler}
              className={
                "outline-none border-2 w-[20%] rounded-[10px] pr-[6px] h-full"
              }
            />
            <span className="text-[34px] text-[#eee] mx-4">/</span>
            <Input
              type={"number"}
              maxlength={"2"}
              onInputEvent={inputHandler}
              className={
                "outline-none border-2 w-[20%] rounded-[10px] pr-[6px] h-full"
              }
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"کد امنیتی"}
              htmlFor={"security"}
              className={"font-bold"}
            />
            <span className="text-[10px]">
              کد آورده شده در کادر روبرو را وارد کنید
            </span>
          </div>
          <Input
            type={"number"}
            id={"security"}
            className={"outline-none border-2 flex-1 rounded-[10px] pr-[6px]"}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"رمز دوم (اینترنتی):"}
              htmlFor={"secondPassword"}
              className={"font-bold"}
            />
            <span className="text-[10px]">
              رمز دوم ارسالی به گوشی خود را در اینجا وارد کنید
            </span>
          </div>
          <Input
            type={"password"}
            id={"secondPassword"}
            className={"outline-none border-2 flex-1 rounded-[10px] pr-[6px]"}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"ایمیل (اختیاری):"}
              htmlFor={"email"}
              className={"font-bold"}
            />
            <span className="text-[10px]">
              رسید پرداخت به این آدرس ایمیل خواهد شد
            </span>
          </div>
          <Input
            type={"email"}
            id={"email"}
            className={"outline-none border-2 flex-1 rounded-[10px] pr-[6px]"}
          />
        </div>
        <div className="flex gap-[4rem]">
          <Button
            type={"submit"}
            innerText={"پرداخت"}
            className={
              "bg-[#0EC592] flex-1 text-center text-white py-[.5rem] rounded-xl"
            }
          />
          <Link
            to={"/finallyBasket"}
            className="bg-[#FCBE56] flex-1 text-center text-white py-[.5rem] rounded-xl"
          >
            انصراف
          </Link>
        </div>
      </form>
    </div>
  );
};

export default InternetPayment;
