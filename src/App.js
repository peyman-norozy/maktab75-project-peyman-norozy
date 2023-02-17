import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData } from "./store/cart-actions";
import Layout from "./components/layout/Layout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Layout>
      <div>peyman</div>
    </Layout>
  );
}

export default App;
