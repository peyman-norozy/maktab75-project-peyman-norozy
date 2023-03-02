import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AddProductForm from "../components/addProductForm";
import { productActions } from "../store/cart-slice";
import DeleteModal from "./../components/DeleteModal";

const ProductManagement = () => {
  const data = useSelector((data) => data);
  console.log(data.cart.items);
  console.log(data.cart.modalDisplay);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate({
      pathname: "/panel/products",
      search: "",
    });
  }, [dispatch, navigate]);

  const deletModalHandler = (event) => {
    console.log(event.target.id);
    navigate({
      pathname: "/panel/products",
      search: `?id=${event.target.id}`,
    });
    console.log(navigate);
    dispatch(productActions.deleteModalDisplay(true));
  };

  return (
    <div className="pt-52 pb-8 h-full vm:pt-24">
      <div>
        <div className="pt-10 flex justify-between items-center px-[32px]">
          <h2 className="text-xl font-bold">مدیریت کالاها</h2>
          <button
            onClick={() => {
              dispatch(productActions.modalDisplayAction(true));
            }}
            className="bg-[#3CCF4E] text-white px-4 py-2 rounded-md hover:bg-green-400"
          >
            افزودن کالا
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <table>
            <thead>
              <tr className="text-xs">
                <th>تصویر</th>
                <th>نام کالا</th>
                <th>دسته بندی</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.cart.items.map((item, index) => (
                <tr key={index} className="text-xs">
                  <td>
                    <div className="w-20">
                      <img src={"http://localhost:3002" + item.image} alt="" />
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{`${item.category}/${item.subcategory}`}</td>
                  <td>
                    <div className="flex flex-col gap-2">
                      <button className="bg-green-700 text-white py-2 px-4 rounded-md">
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {data.cart.modalDisplay && (
        <div className="bg-[#aaaaaa4d] absolute top-0 bottom-0 w-full h-full">
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
