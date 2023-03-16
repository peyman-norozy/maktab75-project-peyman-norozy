import Button from "./button/Button";

const OrdersCart = ({ data }) => {
  console.log(data);

  const registrationTime = new Date(data.createdAt).toLocaleDateString("fa-IR");

  return (
    <>
      <tr>
        <td className="text-center">{`${data.username} ${data.lastname}`}</td>
        <td className="text-center">{data.prices.toLocaleString()}</td>
        <td className="text-center">{registrationTime}</td>
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
