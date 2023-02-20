import MainPageLink from "../components/mainPageLink/MainPageLink";

const ManagementMainPage = () => {
  return (
    <form className="flex justify-center items-center h-[100%]">
      <div className="bg-blue-200 p-4 flex flex-col gap-4 rounded-md">
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
