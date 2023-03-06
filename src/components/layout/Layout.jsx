import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const data = useSelector((status) => status);
  return (
    <Fragment>
      {data.cart.loading && <LoadingSpinner />}
      <MainNavigation />
      <main className="min-h-[39rem] relative">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
