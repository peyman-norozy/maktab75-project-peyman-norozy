import { NavLink } from "react-router-dom";
import MainPageLink from "../mainPageLink/MainPageLink";

const noneActiveClassName =
  "bg-[#aaa] text-[#eee] w-40 h-10 rounded-xl flex items-center justify-center";
const activeClassName =
  "bg-[#34DBA1] text-[#eee] w-40 h-10 rounded-xl text-lg flex items-center justify-center";

const ManagementNavigation = () => {
  return (
    <header className="fixed flex flex-col justify-around items-center py-4 w-full bg-[#FFFFFF] shadow-[0_24px_24px_-30px_rgb(197,197,197,0.685)] important_zIndex ">
      <div className="flex justify-between w-full px-[32px]">
        <h1 className="text-2xl">پنل مدیریت فروشگاه</h1>
        <MainPageLink />
      </div>

      <nav className="flex flex-col gap-4 items-center mt-2 vm:flex-row">
        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive ? activeClassName : noneActiveClassName
          }
        >
          کالاها
        </NavLink>
        <NavLink
          to="inventory"
          className={({ isActive }) =>
            isActive ? activeClassName : noneActiveClassName
          }
        >
          موجودی و قیمت ها
        </NavLink>
        <NavLink
          to="orders"
          className={({ isActive }) =>
            isActive ? activeClassName : noneActiveClassName
          }
        >
          سفارش ها
        </NavLink>
      </nav>
    </header>
  );
};

export default ManagementNavigation;
