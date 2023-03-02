import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import AddProductForm from "../components/addProductForm";
import { productActions } from "../store/cart-slice";

const ProductManagement = () => {
  const data = useSelector((data) => data);
  console.log(data.cart.items);
  console.log(data.cart.modalDisplay);
  const dispatch = useDispatch();

  const getNewData = () => {
    axios
      .get("http://localhost:3002/products", {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      })
      .then((res) => dispatch(productActions.addItemToCart(res.data)))
      .catch((e) => console.log(e));
  };

  const deleteProductHandler = (event) => {
    axios
      .delete(`http://localhost:3002/products/${event.target.id}`, {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      })
      .then(() => getNewData());
  };

  return (
    <div className="pt-52 pb-8 vm:pt-24">
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
                        onClick={deleteProductHandler}
                        id={item.id}
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
        <div className="bg-[#aaaaaa4d] absolute top-0 w-full h-full">
          <AddProductForm />
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
