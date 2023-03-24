import React, { Suspense } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { productActions } from "./store/cart-slice";
import { uiActions } from "./store/ui-slice";
import { USER_API } from "./components/api/axios-constance/useHttp";
import { products } from "./components/api/axios-constance/useHttp";
import { nav } from "./components/api/axios-constance/useHttp";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const ManagementMainPage = React.lazy(() =>
  import("./pages/ManagementMainPage")
);
const CartMainPage = React.lazy(() => import("./pages/CartMainPage"));
const Home = React.lazy(() => import("./pages/Home"));
const IphonePage = React.lazy(() => import("./pages/IphonePage"));
const ShiaomiPage = React.lazy(() => import("./pages/ShiaomiPage"));
const SamsungPage = React.lazy(() => import("./pages/SamsungPage"));
const SmartWatchPage = React.lazy(() => import("./pages/SmartWatchPage"));
const Error = React.lazy(() => import("./pages/ErrorPage"));
const ManagementPanel = React.lazy(() => import("./pages/ManagementPanelPage"));
const ProductManagement = React.lazy(() =>
  import("./pages/ProductManagementPage")
);
const InventoryManagement = React.lazy(() =>
  import("./pages/InventoryManagementPage")
);
const SingleProductPage = React.lazy(() => import("./pages/SingleProductPage"));
const FinalizeShoppingCart = React.lazy(() =>
  import("./pages/FinalizeShoppingCartPage")
);
const InternetPayment = React.lazy(() => import("./pages/InternetPaymentPage"));
const Orders = React.lazy(() => import("./pages/OrdersPage"));
const SuccessfulPayment = React.lazy(() =>
  import("./pages/successfulPaymentPage")
);
const PaymentFailure = React.lazy(() => import("./pages/paymentFailurePage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    USER_API.get(products)
      .then((res) => {
        console.log(res.data);
        dispatch(productActions.addItemToCart(res.data));
      })
      .catch((e) => console.log(e));
  }, [dispatch]);

  useEffect(() => {
    USER_API.get(nav)
      .then((res) => dispatch(uiActions.addOrRemoveNavBar(res.data.showNavBar)))
      .catch((e) => console.log(e));
  }, [dispatch]);

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
