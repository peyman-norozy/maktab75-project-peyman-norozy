import { useSelector } from "react-redux";
import PaginatedItems from "../components/pagination/PaginatedItems";

const IphonePage = () => {
  const data = useSelector((state) => state.cart.items);

  const newData = data.filter((item) => item.brand === "آیفون");

  return <PaginatedItems itemsPerPage={4} data={newData} />;
};

export default IphonePage;
