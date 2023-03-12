import { useState } from "react";
import Button from "../components/button/Button";

const CartMainPage = () => {
  const [getMyBasket, setGetMyBasket] = useState(
    JSON.parse(localStorage.getItem("myBasket"))
  );

  // getMyBasket.filter(item);

  const deleteHandler = (event) => {
    let filteredData = getMyBasket.filter(
      (item) => item.id !== event.target.id
    );
    localStorage.setItem("myBasket", JSON.stringify(filteredData));
    setGetMyBasket(JSON.parse(localStorage.getItem("myBasket")));
  };

  console.log(getMyBasket);
  return (
    <div className=" pb-8 h-full pt-44 vm:pt-36">
      <div className="m-auto w-[94%] mt-10">
        <table className="w-full">
          <thead>
            <tr className="text-xs">
              <th>کالا</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getMyBasket &&
              getMyBasket.map((item) => (
                <tr>
                  <td className="text-sm">{item.name}</td>
                  <td className="text-sm text-center">{item.price}</td>
                  <td className="text-sm text-center">{item.quantity}</td>
                  <td className="text-center text-sm">
                    <Button
                      innerText={"حذف"}
                      id={item.id}
                      onClickEvent={deleteHandler}
                      className={"bg-red-400 text-white py-2 px-4 rounded-md"}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartMainPage;
