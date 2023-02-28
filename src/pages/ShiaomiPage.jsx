import { useSelector } from "react-redux";
import PaginatedItems from "../components/pagination/PaginatedItems";

const ShiaomiPage = () => {
  const data = useSelector((state) => state.cart.items);

  const newData = data[0].mobile.filter((item) => item.name === "mi");

  return <PaginatedItems itemsPerPage={4} data={newData} />;
};

export default ShiaomiPage;
