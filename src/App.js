import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData } from "./store/cart-actions";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ManagementMainPage from "./pages/ManagementMainPage";
import CartMainPage from "./pages/CartMainPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
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
