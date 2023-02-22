import style from "./ProductClassification.module.css";
import { Link, NavLink } from "react-router-dom";
const ProductClassification = () => {
  return (
    <>
      <ul className="text-sm flex gap-4">
        <li className="border-l-2 border-zinc-700 pl-2 mb-2">
          دسته بندی کالاها
        </li>
        <li className="cursor-pointer">
          <NavLink to="/iphone" activeClassName={style.bgColor}>
            آیفون
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/shiaomi" activeClassName={style.bgColor}>
            شیائومی
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/samsung" activeClassName={style.bgColor}>
            سامسونگ
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/smartWatch" activeClassName={style.bgColor}>
            ساعت هوشمند
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default ProductClassification;
