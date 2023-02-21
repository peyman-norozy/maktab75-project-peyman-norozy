import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className="min-h-[39rem] px-14">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
