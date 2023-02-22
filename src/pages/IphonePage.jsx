import WatchAndPhoneCart from "../components/WatchAndPhoneCart";
import { useSelector } from "react-redux";

const customStyle = {
  background1: "bg-[#F5F6F8]",
  background2: "bg-white",
  borderRadius: "rounded-xl",
};

const IphonePage = () => {
  const data = useSelector((state) => state.cart.items);
  console.log(data);

  return (
    <div className="pt-44 grid__product">
      {data.map((items, index) =>
        items.name === "iphone" ? (
          <WatchAndPhoneCart key={index} data={items} styling={customStyle} />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default IphonePage;
