import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AddProductForm from "../components/addProductForm";
import { productActions } from "../store/cart-slice";
import DeleteModal from "./../components/DeleteModal";
import SearchProduct from "../components/SearchProduct";
import Button from "../components/button/Button";
import ProductManagementCart from "../components/ProductManagementCart";

const ProductManagement = () => {
  const data = useSelector((data) => data);
  console.log(data.cart.items);
  console.log(data.cart.modalDisplay);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEYN")) {
      navigate({
        pathname: "/panel/products",
        search: "",
      });
    } else {
      navigate({
        pathname: "/management",
        search: "",
      });
    }
  }, [dispatch, navigate]);

  return (
    <div className="pt-52 pb-8 h-full vm:pt-24">
      <div>
        <div className="pt-10 flex justify-between items-center px-[32px]">
          <h2 className="text-xl font-bold">مدیریت کالاها</h2>
          <Button
            onClickEvent={() => {
              dispatch(productActions.modalDisplayAction(true));
              dispatch(productActions.addFormButtonState(false));
            }}
            className={
              "bg-[#3CCF4E] text-white px-4 py-2 rounded-md hover:bg-green-400"
            }
            innerText={"افزودن کالا"}
          />
        </div>

        <SearchProduct />

        <div className="m-auto w-[94%] mt-10">
          <table className="w-full">
            <thead>
              <tr className="text-xs">
                <th>تصویر</th>
                <th>نام کالا</th>
                <th>دسته بندی</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.cart.searchItems.map((item, index) => (
                <ProductManagementCart key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {data.cart.modalDisplay && (
        <div className="bg-[#aaaaaa4d] absolute top-0 bottom-0 w-full h-full important_zIndex">
          <AddProductForm />
        </div>
      )}
      {data.cart.deleteModalDisplay && (
        <div className="bg-[#aaaaaa4d] absolute top-0 w-full h-full">
          <DeleteModal />
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
