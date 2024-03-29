import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ManagementMainPage from "./pages/ManagementMainPage";
import CartMainPage from "./pages/CartMainPage";
import Home from "./pages/Home";
import IphonePage from "./pages/IphonePage";
import ShiaomiPage from "./pages/ShiaomiPage";
import SamsungPage from "./pages/SamsungPage";
import SmartWatchPage from "./pages/SmartWatchPage";
import Error from "./pages/ErrorPage";
import ManagementPanel from "./pages/ManagementPanelPage";
import ProductManagement from "./pages/ProductManagementPage";
import InventoryManagement from "./pages/InventoryManagementPage";
import SingleProductPage from "./pages/SingleProductPage";
import FinalizeShoppingCart from "./pages/FinalizeShoppingCartPage";
import InternetPayment from "./pages/InternetPaymentPage";
import Orders from "./pages/OrdersPage";
import SuccessfulPayment from "./pages/successfulPaymentPage";
import PaymentFailure from "./pages/paymentFailurePage";
import { productActions } from "./store/cart-slice";
import { uiActions } from "./store/ui-slice";
import { BASE_URL } from "./components/api/axios-constance/useHttp";
import { products } from "./components/api/axios-constance/useHttp";
import { nav } from "./components/api/axios-constance/useHttp";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(BASE_URL + products)
      .then((res) => {
        console.log(res.data);
        dispatch(productActions.addItemToCart(res.data));
      })
      .catch((e) => console.log(e));
  }, [dispatch]);

  useEffect(() => {
    axios
      .get(BASE_URL + nav)
      .then((res) => dispatch(uiActions.addOrRemoveNavBar(res.data.showNavBar)))
      .catch((e) => console.log(e));
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<ManagementMainPage />} />
        <Route path="/cart" element={<CartMainPage />} />
        <Route path="/iphone" element={<IphonePage />} />
        <Route path="/shiaomi" element={<ShiaomiPage />} />
        <Route path="/samsung" element={<SamsungPage />} />
        <Route path="/smartWatch" element={<SmartWatchPage />} />
        <Route path="/singleProduct" element={<SingleProductPage />} />
        <Route path="/finallyBasket" element={<FinalizeShoppingCart />} />
        <Route path="/payment" element={<InternetPayment />} />
        <Route path="/paymentSuccessfully" element={<SuccessfulPayment />} />
        <Route path="/paymentFailure" element={<PaymentFailure />} />
        <Route path="panel" element={<ManagementPanel />}>
          <Route path="products" element={<ProductManagement />} />
          <Route path="inventory" element={<InventoryManagement />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
