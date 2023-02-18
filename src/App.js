import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData } from "./store/cart-actions";
import Layout from "./components/layout/Layout";
import { Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Layout>
      <Switch></Switch>
      <div>peyman</div>
    </Layout>
  );
}

export default App;
