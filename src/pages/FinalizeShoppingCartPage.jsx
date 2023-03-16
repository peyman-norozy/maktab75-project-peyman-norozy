import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import pd from "persian-date";

const FinalizeShoppingCart = () => {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [errorOfDate, setErrorOfDate] = useState("");
  const [errorOfPhoneNumber, setErrorOfPhoneNumber] = useState("");
  const data = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.ui.myBasketLength) {
      navigate({
        pathname: "/finallyBasket",
        search: "",
      });
    } else {
      navigate({
        pathname: "/",
        search: "",
      });
    }
  }, [data.ui.myBasketLength, navigate]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validDate = new RegExp(
      "^(\\d{4})/(0?[1-9]|1[012])/(0?[1-9]|[12][0-9]|3[01])$"
    );
    const validPhone = new RegExp("^(\\+98|0)?9\\d{9}$");

    !validDate.test(date)
      ? setErrorOfDate("تاریخ با فرمت نادرست وارد شده است !!!")
      : setErrorOfDate("");

    !validPhone.test(phone)
      ? setErrorOfPhoneNumber(
          "لطفا شماره تلفن خود را به طور صحیح وارد کنید !!!"
        )
      : setErrorOfPhoneNumber("");

    if (validPhone.test(phone) && validDate.test(date)) {
      const IsDate = date.split("/");
      const persianDate = new pd([+IsDate[0], +IsDate[1], +IsDate[2]], "fa");
      console.log(persianDate);

      localStorage.setItem(
        "IndividualProfile",
        JSON.stringify({
          name: name,
          lastName: lastName,
          address: address,
          date: persianDate.valueOf(),
          phone: phone,
        })
      );
      navigate({
        pathname: "/payment",
        search: "",
      });
    }
  };

  return (
    <div className="h-full pt-52 vm:pt-44">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6 w-[70%] m-auto "
      >
        <div className="flex flex-col gap-4 w-full hm:flex-row">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"نام :"}
              htmlFor={"name"}
              className="block text-gray-700 font-bold mb-2"
            />
            <Input
              type={"text"}
              id={"name"}
              onChangeEvent={handleNameChange}
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
              onChangeEvent={handleLastNameChange}
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full hm:flex-row">
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
              required
              onChange={handleAddressChange}
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
