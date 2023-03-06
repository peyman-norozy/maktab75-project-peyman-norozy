import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import MainPageLink from "../mainPageLink/MainPageLink";
import ProductClassification from "../productClassification/ProductClassification";
import { uiActions } from "../../store/ui-slice";
import { productActions } from "../../store/cart-slice";

const MainNavigation = () => {
  const data1 = useSelector((state) => state);
  const addOrRemoveAuth = data1.ui;
  console.log(data1);

  const dispatch = useDispatch();

  const location = useLocation();

  function sendAndFetch(status) {
    axios
      .post("http://localhost:3002/nav", {
        showNavBar: status,
      })
      .then(() => {
        axios
          .get("http://localhost:3002/nav")
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
    case "/":
      sendAndFetch(true);
      break;
    case "/iphone":
      sendAndFetch(true);
      break;
    case "/shiaomi":
      sendAndFetch(true);
      break;
    case "/samsung":
      sendAndFetch(true);
      break;
    case "/smartWatch":
      sendAndFetch(true);
      break;
    default:
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7832 0.0566406C11.3565 0.0566406 10.1914 1.23389 10.1914 2.66406C10.303 3.67824 10.7427 4.33046 11.3164 4.70312C10.8129 4.94298 10.3432 5.30894 9.94141 5.81641C9.34465 6.59107 8.9684 7.5595 8.86914 8.5625H6.23242C6.23103 8.44524 6.19693 8.34562 6.14844 8.26562H7.2168C8.03915 8.26562 8.71484 7.58993 8.71484 6.76758V4.44336C8.71484 3.62101 8.03915 2.94336 7.2168 2.94336H2.81641C1.99405 2.94336 1.31836 3.62101 1.31836 4.44336V6.76758C1.31836 7.58993 1.99405 8.26562 2.81641 8.26562H3.88477C3.83628 8.34562 3.80217 8.44522 3.80078 8.5625H1.28125C0.69879 8.5625 0.21875 9.04265 0.21875 9.625V16.873C0.21875 17.4554 0.69883 17.9434 1.28125 17.9434H16.7168C17.2992 17.9434 17.7793 17.4554 17.7793 16.873V9.625C17.7793 9.04265 17.2992 8.5625 16.7168 8.5625H16.6953C16.5945 7.5595 16.2139 6.59107 15.6172 5.81641C15.1508 5.29293 14.63 4.9252 14.0918 4.6875C14.8081 4.27601 15.3453 3.57224 15.373 2.66406C15.373 1.23389 14.2099 0.0566406 12.7832 0.0566406ZM1.28125 9.55859H8.82617H16.7168C16.7624 9.55859 16.7832 9.57737 16.7832 9.625V10.0234H1.21484V9.625C1.21484 9.57927 1.23568 9.55859 1.28125 9.55859Z"
                    fill="#3D5363"
                  />
                </svg>
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
