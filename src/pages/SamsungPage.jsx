import { useSelector } from "react-redux";
import PaginatedItems from "../components/pagination/PaginatedItems";

const SamsungPage = () => {
  const data = useSelector((state) => state.cart.items);

  const newData = data.filter((item) => item.name === "samsung");

  console.log(newData);
  return <PaginatedItems itemsPerPage={4} data={newData} />;
};

export default SamsungPage;
