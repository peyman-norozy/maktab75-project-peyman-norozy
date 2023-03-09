import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productActions } from "./../store/cart-slice";
import Button from "./button/Button";

const AddProductForm = () => {
  const [file, setFile] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [classificationError, setCalssificationError] = useState(false);
  const [classErrorNotification, setClassErrorNotification] = useState(false);
  const [productName, setProductName] = useState("");
  const [productClass, setProductClass] = useState("");
  const [modalImage, setModalImage] = useState(null);
  const [description, setDescription] = useState("");

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const data = useSelector((data) => data);
  console.log(data.cart.items);

  const navigate = useNavigate();

  console.log(productClass);
  const categoryAndSubcategory = productClass.split("/");
  console.log(categoryAndSubcategory);

  if (productClass === "") {
    setProductClass("select");
  }

  const getNewData = () => {
    axios
      .get("http://localhost:3002/products", {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      })
      .then((res) => dispatch(productActions.addItemToCart(res.data)))
      .then(() => dispatch(productActions.modalDisplayAction(false)))
      .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
      .catch((e) => console.log(e));
  };

  const formDataUsage = useCallback(() => {
    let formData = new FormData();
    formData.append("image", file);
    formData.append("price", 0);
    formData.append("quantity", 0);
    formData.append("brand", categoryAndSubcategory[1]);
    formData.append("name", productName);
    formData.append("category", categoryAndSubcategory[0]);
    formData.append("subcategory", categoryAndSubcategory[1]);
    formData.append("description", description);
    return formData;
  }, [categoryAndSubcategory, description, file, productName]);

  const addProductHandler = (event) => {
    event.preventDefault();

    if (!classificationError) {
      setClassErrorNotification(true);
      setTimeout(() => {
        setClassErrorNotification(false);
      }, 3000);
      return;
    }

    if (data.cart.buttonState === true) {
      const params = searchParams.get("id");

      console.log(file);
      console.log(productName);
      console.log(categoryAndSubcategory[1]);
      let formData2 = new FormData();
      formData2.append("image", file);
      formData2.append("price", 0);
      formData2.append("quantity", 0);
      formData2.append("brand", categoryAndSubcategory[1]);
      formData2.append("name", productName);
      formData2.append("category", categoryAndSubcategory[0]);
      formData2.append("subcategory", categoryAndSubcategory[1]);
      formData2.append("description", description);

      dispatch(productActions.loadingSpinnerCanger(true));
      axios
        .patch(`http://localhost:3002/products/${params}`, formData2, {
          headers: {
            token: localStorage.getItem("ACCESS_TOKEYN"),
          },
        })
        .then(() => getNewData())
        .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
        .catch((e) => {
          console.log(e);
          setImageError(true);
          setTimeout(() => {
            setImageError(false);
          }, 3000);
        });
    } else {
      const formDataFn = formDataUsage();

      dispatch(productActions.loadingSpinnerCanger(true));
      axios
        .post("http://localhost:3002/products", formDataFn, {
          headers: {
            token: localStorage.getItem("ACCESS_TOKEYN"),
          },
        })
        .then(() => getNewData())
        .then(() => dispatch(productActions.loadingSpinnerCanger(false)))
        .catch((e) => {
          console.log(e);
          setImageError(true);
          setTimeout(() => {
            setImageError(false);
          }, 3000);
        });

      console.log(formDataFn);
    }
  };

  useEffect(() => {
    if (data.cart.buttonState) {
      const params = searchParams.get("id");
      console.log(params);
      dispatch(productActions.loadingSpinnerCanger(true));

      axios
        .get(`http://localhost:3002/products/${params}`, {
          headers: {
            token: localStorage.getItem("ACCESS_TOKEYN"),
          },
        })
        .then((res) => {
          setProductName(res.data.name);
          setDescription(res.data.description);
          setProductClass(`${res.data.category}/${res.data.subcategory}`);
          setModalImage(res.data.image);
          setCalssificationError(true);
        })
        .catch((e) => console.log(e));
    }
  }, [data.cart.buttonState, searchParams, dispatch]);

  const fileInputChangeHandler = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="bg-[#a37fdf] py-2 px-4 flex flex-col gap-4 text-sm rounded-md text-white m-auto w-[50%] fixed top-[60%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
    >
      <div className="flex justify-between">
        <h1 className="font-bold">افزودن/ویرایش کالا</h1>
        <div
          onClick={() => {
            dispatch(productActions.modalDisplayAction(false));
            navigate({
              pathname: "/panel/products",
              search: "",
            });
          }}
          className="bg-red-500 text-white w-6 h-6 rounded-full flex justify-center items-center hover:bg-red-600 cursor-pointer"
        >
          <span>×</span>
        </div>
      </div>
      <div
        className={
          data.cart.buttonState ? "flex items-center justify-between gap-2" : ""
        }
      >
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="product-img">تصویر کالا:</label>
          <input
            type="file"
            id="product-img"
            name="productImage"
            accept="image/jpg"
            required
            onChange={fileInputChangeHandler}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
          {imageError && (
            <p className="text-[rgb(255,136,0)] text-sm text-left mt-1">
              فرمت عکس اشتباه است !!!
            </p>
          )}
        </div>
        {data.cart.buttonState && (
          <div className="w-[60px] h-[60px]">
            <img src={"http://localhost:3002" + modalImage} alt="" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="product-name">نام کالا:</label>
        <input
          type="text"
          id="product-name"
          required
          value={productName}
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
          value={data.cart.buttonState ? productClass : productClass}
          onChange={(event) => {
            setProductClass(event.target.value);
            setCalssificationError(true);
          }}
        >
          <option value="select" disabled>
            انتخاب کنید...
          </option>
          <option value="موبایل/آیفون">موبایل/آیفون</option>
          <option value="موبایل/سامسونگ">موبایل/سامسونگ</option>
          <option value="موبایل/شیائومی">موبایل/شیائومی</option>
          <option value="ساعت/ساعت هوشمند">ساعت/ساعت هوشمند</option>
        </select>
        {classErrorNotification && (
          <p className="text-[rgb(255,136,0)] text-sm text-left mt-1">
            دسته بندی کالای خود را وارد کنید !!!
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="product-desc">توضیحات:</label>
        <textarea
          name="descriptionProduct"
          id="product-desc"
          cols="20"
          rows="5"
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="py-2 pr-1 outline-none rounded-md bg-gray-100 text-black"
        ></textarea>
      </div>
      <div className="flex justify-center items-center">
        {data.cart.buttonState ? (
          <Button
            className={"bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-600"}
            innerText={"اعمال ویرایش"}
          />
        ) : (
          <Button
            className={"bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-600"}
            innerText={"ذخیره"}
          />
        )}
      </div>
    </form>
  );
};

export default AddProductForm;
