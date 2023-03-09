import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import MainPageLink from "../components/mainPageLink/MainPageLink";
import { useNavigate } from "react-router-dom";
import Label from "../components/label/Label";
import { productActions } from "./../store/cart-slice";

const ManagementMainPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(data);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
    dispatch(productActions.loadingSpinnerCanger(true));
    axios
      .post("http://localhost:3002/auth/login", {
        username: userName,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("ACCESS_TOKEYN", res.data.accessToken);
        localStorage.setItem("REFRESH_TOKEN", res.data.refreshToken);
      })
      .then(() => {
        navigate("/panel/products");
      })
      .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
      .catch((e) => {
        console.log(e);
        navigate("/management");
        setUserName("");
        setPassword("");
      });
  };

  return (
    <form onSubmit={submitHandler} className="flex justify-center items-center">
      <div className="bg-blue-200 p-4 flex flex-col gap-4 rounded-md mt-10">
        <h1 className="text-[1.2rem] font-bold text-white">
          ورود به پنل مدیریت فروشگاه پیلوت
        </h1>
        <div className="flex flex-col gap-1">
          <Label
            htmlFor={"userName"}
            className={"text-white"}
            innerText={" نام کاربری :"}
          />
          <input
            type="text"
            id="userName"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="outline-none h-10 px-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label
            htmlFor={"password"}
            className={"text-white"}
            innerText={"رمز عبور :"}
          />

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none h-10 px-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-[#3ccf4e] text-white w-28 m-auto py-4 rounded-md"
        >
          ورود
        </button>
        <MainPageLink />
      </div>
    </form>
  );
};

export default ManagementMainPage;
