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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_26_34)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.6L4.2 12C4.1 12.3 4 12.7 4 13C4 14.1 4.9 15 6 15H18V13H6.4C6.3 13 6.2 12.9 6.2 12.8V12.7L7.1 11H14.5C15.3 11 15.9 10.6 16.2 10L19.8 3.5C20 3.3 20 3.2 20 3C20 2.4 19.6 2 19 2H4.2L3.3 0H0ZM16 16C14.9 16 14 16.9 14 18C14 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_26_34">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
