import style from "./ProductClassification.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendNavstate } from "../../store/cart-actions";
import { fetchNavstate } from "./../../store/cart-actions";

const ProductClassification = () => {
  const dispatch = useDispatch();

  async function sendAndFetch() {
    try {
      await dispatch(sendNavstate(true));
      await dispatch(fetchNavstate("navChanging"));
    } catch (e) {
      console.log(e);
    }
  }

  const navigationAddHandler = () => {
    sendAndFetch();
  };

  return (
    <>
      <ul className="text-sm flex gap-4">
        <li className="border-l-2 border-zinc-700 pl-2 mb-2">
          دسته بندی کالاها
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="iphone"
            className={({ isActive }) =>
              isActive ? style.activeStyle : undefined
            }
            onClick={navigationAddHandler}
          >
            آیفون
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="shiaomi"
            className={({ isActive }) =>
              isActive ? style.activeStyle : undefined
            }
            onClick={navigationAddHandler}
          >
            شیائومی
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="samsung"
            className={({ isActive }) =>
              isActive ? style.activeStyle : undefined
            }
            onClick={navigationAddHandler}
          >
            سامسونگ
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="smartWatch"
            className={({ isActive }) =>
              isActive ? style.activeStyle : undefined
            }
            onClick={navigationAddHandler}
          >
            ساعت هوشمند
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default ProductClassification;
