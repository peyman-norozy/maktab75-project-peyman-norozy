import { Link } from "react-router-dom";

const ManagementNavigation = () => {
  return (
    <>
      <nav>
        <Link to="products">کالا</Link>
        <Link to="inventory">موجودی</Link>
      </nav>
    </>
  );
};

export default ManagementNavigation;
