import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData, fetchNavstate } from "./store/cart-actions";
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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNavstate("navChanging"));
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
        <Route path="/panel" element={<ManagementPanel />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
