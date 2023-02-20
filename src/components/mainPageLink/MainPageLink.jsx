import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendNavstate } from "../../store/cart-actions";
import { fetchNavstate } from "./../../store/cart-actions";

const MainPageLink = () => {
  const dispatch = useDispatch();

  async function sendAndFetch() {
    await dispatch(sendNavstate(true));
    await dispatch(fetchNavstate("navChanging"));
  }

  const navigationAddHandler = () => {
    sendAndFetch();
  };

  return (
    <Fragment>
      <Link
        onClick={navigationAddHandler}
        to="/"
        className="flex items-start gap-2 mt-2 mb-2 border-b-2 border-zinc-600"
      >
        <i>
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C10 0 3.814 5.34 0.357 8.232C0.154 8.416 0 8.684 0 9C0 9.553 0.447 10 1 10H3V17C3 17.553 3.447 18 4 18H7C7.553 18 8 17.552 8 17V13H12V17C12 17.552 12.447 18 13 18H16C16.553 18 17 17.553 17 17V10H19C19.553 10 20 9.553 20 9C20 8.684 19.846 8.416 19.617 8.232C16.184 5.34 10 0 10 0Z"
              fill="black"
            />
          </svg>
        </i>
        <span>صفحه اصلی</span>
      </Link>
    </Fragment>
  );
};

export default MainPageLink;
