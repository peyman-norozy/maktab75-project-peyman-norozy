import { useSelector } from "react-redux";
import PaginatedItems from "../components/pagination/PaginatedItems";

const ShiaomiPage = () => {
  const data = useSelector((state) => state.cart.items);

  const newData = data.filter((item) => item.brand === "شیائومی");

  return <PaginatedItems itemsPerPage={4} data={newData} />;
};

export default ShiaomiPage;
