import axios from "axios";
import style from "./ProductClassification.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { productActions } from "../../store/cart-slice";
import { BASE_URL } from "../api/axios-constance/useHttp";
import { nav } from "../api/axios-constance/useHttp";

const ProductClassification = () => {
  const dispatch = useDispatch();

  const navigationAddHandler = () => {
    dispatch(productActions.loadingSpinnerCanger(true));
    axios
      .post(BASE_URL + nav, {
        showNavBar: true,
      })
      .then(() => {
        axios
          .get(BASE_URL + nav)
          .then((res) =>
            dispatch(uiActions.addOrRemoveNavBar(res.data.showNavBar))
          )
          .catch((e) => console.log(e));
      })
      .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
      .catch((e) => console.log(e));
  };

  return (
<<<<<<< HEAD
    <ul className="text-sm flex gap-4">
      <li className="border-l-2 border-zinc-700 pl-2 mb-2">دسته بندی کالاها</li>
      <li className="cursor-pointer">موبایل</li>
      <li className="cursor-pointer">ساعت</li>
    </ul>
=======
    <>
      <ul className="text-sm flex gap-4">
        <li className="border-l-2 border-zinc-700 pl-2 mb-2">
          دسته بندی کالاها
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="iphone"
            className={({ isActive }) =>
              isActive ? style.activeStyle : undefined
            }
            onClick={navigationAddHandler}
          >
            آیفون
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="shiaomi"
            className={({ isActive }) =>
              isActive ? style.activeStyle : undefined
            }
            onClick={navigationAddHandler}
          >
            شیائومی
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="samsung"
            className={({ isActive }) =>
              isActive ? style.activeStyle : undefined
            }
            onClick={navigationAddHandler}
          >
            سامسونگ
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="smartWatch"
            className={({ isActive }) =>
              isActive ? style.activeStyle : undefined
            }
            onClick={navigationAddHandler}
          >
            ساعت هوشمند
          </NavLink>
        </li>
      </ul>
    </>
>>>>>>> development
  );
};

export default ProductClassification;
