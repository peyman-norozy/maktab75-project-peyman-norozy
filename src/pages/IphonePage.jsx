import { useSelector } from "react-redux";
import PaginatedItems from "../components/pagination/PaginatedItems";

const IphonePage = () => {
  const data = useSelector((state) => state.cart.items);

  let newData = [];
  for (let key of data) {
    if (key.name === "iphone") {
      newData.push(key);
    }
  }

  return <PaginatedItems itemsPerPage={4} data={newData} />;
};

export default IphonePage;
