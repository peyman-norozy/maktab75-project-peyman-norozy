import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../store/cart-slice";

const SearchProduct = () => {
  const data2 = useSelector((state) => state);
  const itemList = data2.cart.items;
  console.log(itemList);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    console.log(event.target.value);
    const query = event.target.value;
    let updatedList = [...itemList];

    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    dispatch(productActions.addSearchItem(updatedList));
  };

  return (
    <div>
      <input
        type="search"
        placeholder="search here..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchProduct;
