import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "./../store/cart-slice";

const ProductManagement = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [file, setFile] = useState(null);
  const [productName, setProductName] = useState("");
  const [productClass, setProductClass] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((data) => data);
  console.log(data.cart.items);

  console.log(productClass);

  const categoryAndSubcategory = productClass.split("/");
  console.log(categoryAndSubcategory);

  const getNewData = () => {
    axios
      .get("http://localhost:3002/products", {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      })
      .then((res) => dispatch(productActions.addItemToCart(res.data)))
      .then(() => setModalDisplay(false))
      .catch((e) => console.log(e));
  };

  const addProductHandler = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("image", file);
    formData.append("price", 0);
    formData.append("quantity", 0);
    formData.append("brand", categoryAndSubcategory[1]);
    formData.append("name", productName);
    formData.append("category", categoryAndSubcategory[0]);
    formData.append("subcategory", categoryAndSubcategory[1]);
    formData.append("description", description);

    axios
      .post("http://localhost:3002/products", formData, {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      })
      .then(() => getNewData())
      .catch((e) => console.log(e));

    console.log(formData);
  };

  return (
    <div className="pt-52 pb-8 vm:pt-24">
      <div>
        <div className="pt-10 flex justify-between items-center px-[32px]">
          <h2 className="text-xl font-bold">مدیریت کالاها</h2>
          <button
            onClick={() => {
              setModalDisplay(true);
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
              {data.cart.items.map((item) => (
                <tr className="text-xs">
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
                      <button className="bg-red-400 text-white py-2 px-4 rounded-md">
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
      {modalDisplay && (
        <div className="bg-[#aaaaaa4d] absolute top-0 w-full h-full flex justify-center items-center">
          <form
            onSubmit={addProductHandler}
            className="bg-[#a37fdf] py-2 px-4 flex flex-col gap-4 text-sm rounded-md text-white"
          >
            <div className="flex justify-between">
              <h1 className="font-bold">افزودن/ویرایش کالا</h1>
              <div
                onClick={() => setModalDisplay(false)}
                className="bg-red-500 text-white w-6 h-6 rounded-full flex justify-center items-center hover:bg-red-600 cursor-pointer"
              >
                <span>×</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="product-img">تصویر کالا:</label>
              <input
                type="file"
                id="product-img"
                onChange={(event) => setFile(event.target.files[0])}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="product-name">نام کالا:</label>
              <input
                type="text"
                id="product-name"
                onChange={(event) => setProductName(event.target.value)}
                className="py-2 pr-1 outline-none rounded-md bg-gray-100 text-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="product-class">دسته بندی کالا:</label>
              <select
                id="product-class"
                className="py-2 pr-1 outline-none rounded-md bg-gray-100 text-black"
                defaultValue={"select"}
                onChange={(event) => setProductClass(event.target.value)}
              >
                <option value="select" disabled>
                  انتخاب کنید...
                </option>
                <option value="موبایل/آیفون">موبایل/آیفون</option>
                <option value="موبایل/سامسونگ">موبایل/سامسونگ</option>
                <option value="موبایل/شیائومی">موبایل/شیائومی</option>
                <option value="ساعت/ساعت هوشمند">ساعت/ساعت هوشمند</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="product-desc">توضیحات:</label>
              <textarea
                name=""
                id="product-desc"
                cols="20"
                rows="5"
                onChange={(event) => setDescription(event.target.value)}
                className="py-2 pr-1 outline-none rounded-md bg-gray-100 text-black"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-600">
                ذخیره
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
