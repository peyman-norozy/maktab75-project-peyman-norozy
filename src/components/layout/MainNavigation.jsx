import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import MainPageLink from "../mainPageLink/MainPageLink";
import ProductClassification from "../productClassification/ProductClassification";
import { uiActions } from "../../store/ui-slice";
import { productActions } from "../../store/cart-slice";
import { BASE_URL } from "../api/axios-constance/useHttp";
import { nav } from "../api/axios-constance/useHttp";
import ManagementSvg from "../SVG/ManagementSvg";
import OrdersSvg from "../SVG/OrdersSvg";

const MainNavigation = () => {
  const data1 = useSelector((state) => state);
  const addOrRemoveAuth = data1.ui;
  console.log(data1);

  const dispatch = useDispatch();

  const location = useLocation();

  function sendAndFetch(status) {
    axios
      .post(BASE_URL + nav, {
        showNavBar: status,
      })
      .then(() => {
        axios
          .get(BASE_URL + nav)
          .then((res) =>
            dispatch(uiActions.addOrRemoveNavBar(res.data.showNavBar))
          )
          .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }

  console.log(addOrRemoveAuth);
  const navigationRemoveHandler = () => {
    dispatch(productActions.loadingSpinnerCanger(true));
    sendAndFetch(false);
  };

  switch (location.pathname) {
    case "/management":
      sendAndFetch(false);
      break;
    case "/panel/products":
      sendAndFetch(false);
      break;
    case "/panel/inventory":
      sendAndFetch(false);
      break;
    case "/panel/orders":
      sendAndFetch(false);
      break;
    default:
      sendAndFetch(true);
  }

  return (
    addOrRemoveAuth.showNavBar && (
      <header className="fixed top-0 px-14 bg-[#FFFFFF] shadow-[0_24px_24px_-30px_rgb(197,197,197,0.685)] w-full important_zIndex ">
        <div className="flex justify-between items-center pt-2 pb-4 border-b-2">
          <Logo />
          <ul className="flex items-center gap-4 h-full">
            <li
              onClick={navigationRemoveHandler}
              className="flex items-center h-full"
            >
              <Link
                to="management"
                className="flex items-center gap-2 cursor-pointer bg-[#E0E7EC] py-2 px-4 rounded-md"
              >
                <ManagementSvg />
                <span className="text-zinc-700">مدیریت</span>
              </Link>
            </li>
            <li className="flex items-center h-full">
              <Link
                to="cart"
                className="flex items-center gap-2 cursor-pointer bg-[#3CCF4E] py-2 px-4 rounded-md"
              >
                <OrdersSvg />
                <span className="text-white">سبد خرید</span>
              </Link>
            </li>
          </ul>
        </div>
        <ul>
          <li className="flex ">
            <MainPageLink />
          </li>
        </ul>
        <ProductClassification />
      </header>
    )
  );
};

export default MainNavigation;
