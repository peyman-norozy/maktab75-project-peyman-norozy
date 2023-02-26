import { useState } from "react";
import { useDispatch } from "react-redux";
import MainPageLink from "../components/mainPageLink/MainPageLink";
import { loginRequest } from "../store/auth-actions";
import { useNavigate } from "react-router-dom";

const ManagementMainPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(password);
  const submitHandler = async (event) => {
    event.preventDefault();

    await dispatch(loginRequest({ userName, password }));

    setUserName("");
    setPassword("");
    navigate("/panel");
  };

  return (
    <form onSubmit={submitHandler} className="flex justify-center items-center">
      <div className="bg-blue-200 p-4 flex flex-col gap-4 rounded-md mt-10">
        <h1 className="text-[1.2rem] font-bold text-white">
          ورود به پنل مدیریت فروشگاه پیلوت
        </h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="userName" className="text-white">
            نام کاربری :
          </label>
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
          <label htmlFor="password" className="text-white">
            رمز عبور :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none h-10 px-2 rounded-md"
          />
        </div>
        <button className="bg-[#3ccf4e] text-white w-28 m-auto py-4 rounded-md">
          ورود
        </button>
        <MainPageLink />
      </div>
    </form>
  );
};

export default ManagementMainPage;
