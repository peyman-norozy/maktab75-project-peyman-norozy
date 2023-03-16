import Button from "./button/Button";

const OrdersCart = () => {
  return (
    <>
      <tr>
        <td className="text-center">اکبر زمانی</td>
        <td className="text-center">920,000</td>
        <td className="text-center">1399/1/5</td>
        <td className="text-center">
          <Button
            className={
              "bg-[#009225] text-white py-[6px] px-[8px] rounded-[4px] hover:bg-[#00ff40]"
            }
            innerText={"بررسی سفارش"}
          />
        </td>
      </tr>
    </>
  );
};

export default OrdersCart;
