import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../store/cart-slice";

const ProductManagementCart = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletModalHandler = (event) => {
    console.log(event.target.id);
    navigate({
      pathname: "/panel/products",
      search: `?id=${event.target.id}`,
    });
    dispatch(productActions.deleteModalDisplay(true));
  };

  const editHandler = (event) => {
    console.log(event.target.id);
    dispatch(productActions.modalDisplayAction(true));
    dispatch(productActions.addFormButtonState(true));
    navigate({
      pathname: "/panel/products",
      search: `?id=${event.target.id}`,
    });
    console.log(item);
  };

  return (
    <>
      <tr className="text-xs">
        <td className="flex justify-center">
          <div className="w-20">
            <img src={"http://localhost:3002" + item.image} alt="" />
          </div>
        </td>
        <td>{item.name}</td>
        <td>{`${item.category}/${item.subcategory}`}</td>
        <td>
          <div className="flex flex-col gap-2">
            <button
              id={item.id}
              onClick={editHandler}
              className="bg-green-700 text-white py-2 px-4 rounded-md"
            >
              ویرایش
            </button>
            <button
              id={item.id}
              onClick={deletModalHandler}
              className="bg-red-400 text-white py-2 px-4 rounded-md"
            >
              حذف
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductManagementCart;
