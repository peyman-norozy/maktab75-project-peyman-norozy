import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData, fetchNavstate } from "./store/cart-actions";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ManagementMainPage from "./pages/ManagementMainPage";
import CartMainPage from "./pages/CartMainPage";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch, fetchCartData]);

  useEffect(() => {
    dispatch(fetchNavstate("navChanging"));
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/management">
          <ManagementMainPage />
        </Route>
        <Route path="/cart">
          <CartMainPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
