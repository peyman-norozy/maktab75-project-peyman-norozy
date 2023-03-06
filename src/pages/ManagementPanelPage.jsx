import { Fragment } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import ManagementNavigation from "../components/layout/ManagementNavigation";
import { productActions } from "./../store/cart-slice";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const ManagementPanel = () => {
  const data = useSelector((data) => data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
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
      .catch((e) => {
        console.log(e);
        navigate("/management");
      });
  }, [dispatch, navigate]);

  return (
    <Fragment>
      <div>
        {data.cart.loading && <LoadingSpinner />}
        <ManagementNavigation />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default ManagementPanel;
