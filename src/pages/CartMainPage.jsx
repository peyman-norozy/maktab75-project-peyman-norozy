import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/Button";
import { uiActions } from "../store/ui-slice";

const CartMainPage = () => {
  const [getMyBasket, setGetMyBasket] = useState(
    JSON.parse(localStorage.getItem("myBasket"))
  );
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteHandler = (event) => {
    let filteredData = getMyBasket.filter(
      (item) => item.id !== event.target.id
    );
    localStorage.setItem("myBasket", JSON.stringify(filteredData));
    const getItem = JSON.parse(localStorage.getItem("myBasket"));
    setGetMyBasket(getItem);
    dispatch(uiActions.basketBalance(getItem.length));
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
              getMyBasket.map((item, index) => (
                <tr key={index}>
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
        {data.ui.myBasketLength ? (
          <div className="mt-[30px] flex justify-between items-center">
            <p className="bg-[#eee] py-[20px] px-[30px] rounded-lg">
              جمع :
              <span className="font-bold text-[1.3rem] pr-[10px]">2000</span>{" "}
              تومان
            </p>
            <Button
              innerText={"نهایی کردن سبد خرید"}
              className={
                "text-white bg-[#009c68] hover:bg-[#00c080] text-sm py-[10px] px-[20px] rounded-lg"
              }
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartMainPage;
