import { useSelector } from "react-redux";
import WatchAndPhoneCart from "../components/WatchAndPhoneCart";
import { customStyle } from "../components/customStyle/CustomStyle";
import PaginatedItems from "../components/pagination/PaginatedItems";

const ShiaomiPage = () => {
  const data = useSelector((state) => state.cart.items);

  return (
    <div className="pt-44 grid__product gap-4 py-4 px-6">
      {data.map((items, index) =>
        items.name === "mi" ? (
          <WatchAndPhoneCart key={index} data={items} styling={customStyle} />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default ShiaomiPage;
