import { Fragment } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import ManagementNavigation from "../components/layout/ManagementNavigation";
import { productActions } from "./../store/cart-slice";

const ManagementPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productActions.loadingSpinnerCanger(true));
    axios
      .get("http://localhost:3002/products", {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(productActions.addItemToCart(res.data));
      })
      .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
      .catch((e) => {
        console.log(e);
        navigate("/management");
      });
  }, [dispatch, navigate]);

  return (
    <Fragment>
      <div>
        <ManagementNavigation />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default ManagementPanel;
