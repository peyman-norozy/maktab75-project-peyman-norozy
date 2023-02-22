import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData, fetchNavstate } from "./store/cart-actions";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ManagementMainPage from "./pages/ManagementMainPage";
import CartMainPage from "./pages/CartMainPage";
import Home from "./pages/Home";
import IphonePage from "./pages/IphonePage";
import ShiaomiPage from "./pages/ShiaomiPage";
import SamsungPage from "./pages/SamsungPage";
import SmartWatchPage from "./pages/SmartWatchPage";

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
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/management" exact>
          <ManagementMainPage />
        </Route>
        <Route path="/cart" exact>
          <CartMainPage />
        </Route>
        <Route path="/iphone" exact>
          <IphonePage />
        </Route>
        <Route path="/shiaomi" exact>
          <ShiaomiPage />
        </Route>
        <Route path="/samsung" exact>
          <SamsungPage />
        </Route>
        <Route path="/smartWatch" exact>
          <SmartWatchPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
