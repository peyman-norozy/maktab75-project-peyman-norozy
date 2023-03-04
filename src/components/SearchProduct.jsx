import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../store/cart-slice";

const SearchProduct = () => {
  const [setSearchError, newSetSearchError] = useState(false);

  const data2 = useSelector((state) => state);
  const itemList = data2.cart.items;
  console.log(itemList);

  const dispatch = useDispatch();

  useEffect(() => {
    let updatedList = [...itemList];
    dispatch(productActions.addSearchItem(updatedList));
  }, [dispatch, itemList]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    console.log(query);
    let updatedList = [...itemList];

    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    console.log(updatedList);

    if (updatedList.length === 0) {
      newSetSearchError(true);
    } else {
      newSetSearchError(false);
    }

    dispatch(productActions.addSearchItem(updatedList));
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-[20px]">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-[#eee] overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="h-full w-full outline-none text-sm text-gray-700 pr-2 bg-[#eee]"
            type="search"
            placeholder="جستوجو کنید..."
            onChange={handleInputChange}
          />
        </div>
      </div>
      {setSearchError && (
        <p className="text-red-600 text-center mt-2 text-sm">
          محصول مورد نظر یافت نشد
        </p>
      )}
    </>
  );
};

export default SearchProduct;
