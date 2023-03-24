import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import ManagementNavigation from "../components/layout/ManagementNavigation";
import { productActions } from "./../store/cart-slice";
import { ADMIN_API } from "../components/api/axios-constance/useHttp";
import { products } from "../components/api/axios-constance/useHttp";

const ManagementPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productActions.loadingSpinnerCanger(true));
    ADMIN_API.get(products)
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
