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
  return (
    <>
      <div className="pt-48 px-14">
        <div className="bg-white flex flex-col vm:flex-row justify-center items-center gap-4">
          <div className="w-[240px]">
            <img src={`${BASE_URL}${singleProduct.image}`} alt="" />
          </div>
          <div>
            <h1>{singleProduct.name}</h1>
            <div className="flex justify-center items-center gap-2">
              <span>{singleProduct.category}</span>
              <span className="text-2xl font-bold">&#8592;</span>
              <span>{singleProduct.subcategory}</span>
            </div>
            <div>
              <span className="font-bold">{singleProduct.price}</span>
              <span>تومان</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div>
                <span>f</span>
                <span></span>
                <span>d</span>
              </div>
              <Button
                className={
                  "bg-[#0b8600] text-white px-[10px] py-[10px] rounded-[5px]"
                }
                innerText={"افزودن به سبد خرید"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
