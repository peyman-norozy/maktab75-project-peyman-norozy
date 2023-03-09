import axios from "axios";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "../productClassification/ProductClassification.module.css";
import { uiActions } from "../../store/ui-slice";
import { productActions } from "./../../store/cart-slice";
import { BASE_URL } from "../api/axios-constance/useHttp";
import { nav } from "../api/axios-constance/useHttp";
import HomeSvg from "../SVG/HomeSvg";

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
          <HomeSvg />
        </i>
        <span className="text-sm">صفحه اصلی</span>
      </NavLink>
    </Fragment>
  );
};

export default MainPageLink;
