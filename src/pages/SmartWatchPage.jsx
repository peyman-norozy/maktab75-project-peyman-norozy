import { useSelector } from "react-redux";
import PaginatedItems from "../components/pagination/PaginatedItems";

const SmartWatchPage = () => {
  const data = useSelector((state) => state.cart.items);

  const newData = data[0].watch.filter((item) => item.name === "smartWatch");

  return <PaginatedItems itemsPerPage={4} data={newData} />;
};

export default SmartWatchPage;
