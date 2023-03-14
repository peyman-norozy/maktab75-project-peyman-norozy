import { useState } from "react";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const FinalizeShoppingCart = () => {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [errorOfDate, setErrorOfDate] = useState("");
  const [errorOfPhoneNumber, setErrorOfPhoneNumber] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validDate = new RegExp(
      "^(\\d{4})/(0?[1-9]|1[012])/(0?[1-9]|[12][0-9]|3[01])$"
    );
    const validPhone = new RegExp("^(\\+98|0)?9\\d{9}$");
    if (!validDate.test(date)) {
      setErrorOfDate("تاریخ با فرمت نادرست وارد شده است !!!");
    } else {
      setErrorOfDate("");
    }
    if (!validPhone.test(phone)) {
      setErrorOfPhoneNumber("لطفا شماره تلفن خود را به طور صحیح وارد کنید !!!");
      console.log("peyman");
    } else {
      setErrorOfPhoneNumber("");
    }
  };

  return (
    <div className="h-screen pt-52 vm:pt-44">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6 w-[70%] m-auto"
      >
        <div className="flex gap-4 w-full">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"نام :"}
              htmlFor={"name"}
              className="block text-gray-700 font-bold mb-2"
            />
            <Input
              type={"text"}
              id={"name"}
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col flex-1">
            <Label
              innerText={"نام خانوادگی :"}
              htmlFor={"lastName"}
              className="block text-gray-700 font-bold mb-2"
            />
            <Input
              type={"text"}
              id={"lastName"}
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"تاریخ تحویل :"}
              htmlFor={"date"}
              className="block text-gray-700 font-bold mb-2"
            />
            <span className="text-xs">لطفا با فرمت (1400/2/4) وارد کنید.</span>
            <Input
              type={"text"}
              id={"date"}
              value={date}
              onChangeEvent={handleDateChange}
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errorOfDate && (
              <span className="text-xs text-red-600">{errorOfDate}</span>
            )}
          </div>
          <div className="flex flex-col flex-1">
            <Label
              innerText={"تلفن همراه :"}
              htmlFor={"telephone"}
              className="block text-gray-700 font-bold mb-2"
            />
            <span className="text-xs">
              لطفا شماره همراه خود را با صفر یا بدون صفر وارد کنید.
            </span>
            <Input
              type={"tel"}
              id={"telephone"}
              onChangeEvent={handlePhoneChange}
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errorOfPhoneNumber && (
              <span className="text-xs text-red-600">{errorOfPhoneNumber}</span>
            )}
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full">
            <Label
              innerText={"آدرس :"}
              htmlFor={"address"}
              className="block text-gray-700 font-bold mb-2"
            />
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="5"
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
        </div>
        <div>
          <Button
            type={"submit"}
            innerText={"پرداخت"}
            className={
              "form-btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
          />
        </div>
      </form>
    </div>
  );
};

export default FinalizeShoppingCart;
