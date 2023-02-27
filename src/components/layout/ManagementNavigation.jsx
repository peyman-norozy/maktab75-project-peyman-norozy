import { Link } from "react-router-dom";

const ManagementNavigation = () => {
  return (
    <>
      <nav>
        <Link to="products">کالا</Link>
        <Link to="inventory">موجودی</Link>
        <Link to="orders">سفارش ها</Link>
      </nav>
    </>
  );
};

export default ManagementNavigation;
