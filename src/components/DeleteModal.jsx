import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { productActions } from "../store/cart-slice";
import Button from "./button/Button";

const DeleteModal = () => {
  const data = useSelector((data) => data);
  console.log(data.cart.items);
  console.log(data.cart.modalDisplay);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const getNewData = () => {
    axios
      .get("http://localhost:3002/products", {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      })
      .then((res) => dispatch(productActions.addItemToCart(res.data)))
      .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
      .catch((e) => console.log(e));
  };

  const deleteProductHandler = (event) => {
    const searchParams = new URLSearchParams(location.search);

    const id = searchParams.get("id");
    console.log(id);

    dispatch(productActions.loadingSpinnerCanger(true));

    axios
      .delete(`http://localhost:3002/products/${id}`, {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      })
      .then(() => dispatch(productActions.deleteModalDisplay(false)))
      .then(() => dispatch(productActions.addSearchItem([])))
      .then(() =>
        navigate({
          pathname: "/panel/products",
          search: "",
        })
      )
      .then(() => getNewData())
      .catch((e) => console.log(e));
  };

  const dissuasionHandler = () => {
    navigate({
      pathname: "/panel/products",
      search: "",
    });
    dispatch(productActions.deleteModalDisplay(false));
  };

  return (
    <div className="bg-[#6d75a3] py-2 px-4 flex flex-col justify-center items-center gap-8 text-sm rounded-md text-white m-auto w-[50%] vm:w-[350px] h-[200px] fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
      <p className="text-center">آیا از حذف این محصول مطمئن هستید؟</p>
      <div className="flex justify-center gap-10">
        <Button
          onClickEvent={deleteProductHandler}
          className={"bg-red-400 text-white py-2 px-4 rounded-md"}
          innerText={"حذف"}
        />
        <Button
          onClickEvent={dissuasionHandler}
          className={"bg-green-500 text-white py-2 px-4 rounded-md"}
          innerText={"انصراف"}
        />
      </div>
    </div>
  );
};

export default DeleteModal;
