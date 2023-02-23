import { useSelector } from "react-redux";
import PaginatedItems from "../components/pagination/PaginatedItems";

const SamsungPage = () => {
  const data = useSelector((state) => state.cart.items);

  let newData = [];
  for (let key of data) {
    if (key.name === "samsung") {
      newData.push(key);
    }
  }
  return <PaginatedItems itemsPerPage={4} data={newData} />;
};

export default SamsungPage;
