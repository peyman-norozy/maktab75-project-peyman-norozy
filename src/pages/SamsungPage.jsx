import { useSelector } from "react-redux";
import WatchAndPhoneCart from "../components/WatchAndPhoneCart";
import { customStyle } from "../components/customStyle/CustomStyle";

const SamsungPage = () => {
  const data = useSelector((state) => state.cart.items);

  return (
    <div className="pt-44 grid__product gap-4 py-4 px-6">
      {data.map((items, index) =>
        items.name === "samsung" ? (
          <WatchAndPhoneCart key={index} data={items} styling={customStyle} />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default SamsungPage;
