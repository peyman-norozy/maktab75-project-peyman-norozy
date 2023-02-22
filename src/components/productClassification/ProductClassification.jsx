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
          <Link to="/iphone">آیفون</Link>
        </li>
        <li className="cursor-pointer">شیائومی</li>
        <li className="cursor-pointer">سامسونگ</li>
        <li className="cursor-pointer">ساعت هوشمند</li>
      </ul>
    </>
  );
};

export default ProductClassification;
