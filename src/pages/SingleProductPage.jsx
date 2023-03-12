import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "./../store/cart-slice";
import { BASE_URL } from "../components/api/axios-constance/useHttp";
import { products } from "../components/api/axios-constance/useHttp";
import Button from "./../components/button/Button";

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState("");
  // const [priceChanger, setPriceChanger] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.loadingSpinnerCanger(true));
    axios
      .get(`${BASE_URL}${products}/${productId}`)
      .then((res) => setSingleProduct(res.data))
      .then(() => dispatch(productActions.loadingSpinnerCanger(true)))
      .catch((e) => console.log(e));
  }, [productId, dispatch]);

  console.log(singleProduct.price);

  const addBasketHandler = () => {
    console.log(newQuantity);
    console.log(singleProduct.price);

    if (newQuantity === 0) {
      alert("لطفا تعداد مورد نظر خود را انتخاب کنید!!!");
      return;
    }

    const BasketGetItem = JSON.parse(localStorage.getItem("myBasket")) || [];
    console.log(BasketGetItem);
    const existingItem = BasketGetItem.find((item) => item.id === productId);
    console.log(existingItem);

    if (existingItem) {
      existingItem.quantity += newQuantity;
    } else {
      BasketGetItem.push({
        name: singleProduct.name,
        price: singleProduct.price,
        quantity: newQuantity,
        id: productId,
      });
    }

    localStorage.setItem("myBasket", JSON.stringify(BasketGetItem));
  };
  // const changePrice = () => {
  //   const sign = singleProduct.price && singleProduct.price.split("،").join("");
  //   console.log(sign);
  // };
  // changePrice();
  return (
    <>
      <div className="pt-48 px-14">
        <div className="bg-white rounded-2xl">
          <div className="flex flex-col gap-8 vm:flex-row justify-center items-center vm:gap-8 py-[20px] px-[20px] w-[90%] m-auto">
            <div className="w-[250px] vm:w-[300px]">
              <img src={`${BASE_URL}${singleProduct.image}`} alt="" />
            </div>
            <div className="flex flex-col gap-14">
              <div>
                <h1 className="font-bold text-[1.4rem]">
                  {singleProduct.name}
                </h1>
                <div className="flex justify-start items-center gap-2 mt-4">
                  <span>{singleProduct.category}</span>
                  <span className="w-4">
                    <img
                      src="./images/icon/downward-arrow-down.png"
                      alt=""
                      className="rotate-90"
                    />
                  </span>
                  <span>{singleProduct.subcategory}</span>
                </div>
              </div>
              <div>
                <div className="flex gap-2 justify-start items-center mb-8">
                  <span className="font-bold text-[1.4rem] inline-block min-w-4">
                    {singleProduct.price}
                  </span>
                  <span>تومان</span>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <div className="flex justify-center items-center gap-2 border-[2px] px-[4px] rounded-lg">
                    <div className="flex flex-col border-l-2 pl-[4px]">
                      <span
                        onClick={() => setNewQuantity(newQuantity + 1)}
                        className="w-[20px] inline-block cursor-pointer"
                      >
                        <img
                          src="./images/icon/downward-arrow-up.png"
                          alt=""
                          className="w-full"
                        />
                      </span>
                      <span
                        onClick={() =>
                          newQuantity <= 0 ? 0 : setNewQuantity(newQuantity - 1)
                        }
                        className="w-[20px] inline-block cursor-pointer"
                      >
                        <img
                          src="./images/icon/downward-arrow-down.png"
                          alt=""
                          className="w-full"
                        />
                      </span>
                    </div>
                    <div>
                      <span className="inline-block min-w-[20px] text-center">
                        {newQuantity}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClickEvent={addBasketHandler}
                    className={
                      "bg-[#0b8600] text-white px-[10px] py-[10px] rounded-[5px]"
                    }
                    innerText={"افزودن به سبد خرید"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-[20px] pb-[20px] ">
            <p className="font-bold text-[1.4rem]">توضیحات :</p>
            <p className="leading-[2]">{singleProduct.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
