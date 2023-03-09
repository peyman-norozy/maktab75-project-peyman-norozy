import axios from "axios";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "../productClassification/ProductClassification.module.css";
import { uiActions } from "../../store/ui-slice";
import { productActions } from "./../../store/cart-slice";
import { BASE_URL } from "../api/axios-constance/useHttp";
import { nav } from "../api/axios-constance/useHttp";

const MainPageLink = () => {
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
          .then(() => dispatch(productActions.loadingSpinnerCanger(false)))

          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  return (
    <Fragment>
      <NavLink
        to="/"
        style={{
          display: "flex",
          alignItems: "start",
          gap: "8px",
          marginTop: "8px",
          marginBottom: "8px",
        }}
        className={({ isActive }) => (isActive ? style.activeStyle : undefined)}
        onClick={navigationAddHandler}
      >
        <i>
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C10 0 3.814 5.34 0.357 8.232C0.154 8.416 0 8.684 0 9C0 9.553 0.447 10 1 10H3V17C3 17.553 3.447 18 4 18H7C7.553 18 8 17.552 8 17V13H12V17C12 17.552 12.447 18 13 18H16C16.553 18 17 17.553 17 17V10H19C19.553 10 20 9.553 20 9C20 8.684 19.846 8.416 19.617 8.232C16.184 5.34 10 0 10 0Z"
              fill="black"
            />
          </svg>
        </i>
        <span className="text-sm">صفحه اصلی</span>
      </NavLink>
    </Fragment>
  );
};

export default MainPageLink;
