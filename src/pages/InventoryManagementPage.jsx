import { useSelector } from "react-redux";
import SearchProduct from "../components/SearchProduct";
import InventoryManagementCart from "../components/InventoryManagementCart";

const InventoryManagement = () => {
  const data = useSelector((data) => data);

  return (
    <>
      <div className="pt-52 pb-8 h-full vm:pt-24">
        <div>
          <div className="pt-10 flex justify-between items-center px-[32px]">
            <h2 className="text-xl font-bold">مدیریت موجودی و قیمت ها</h2>
            <button className="bg-[#3CCF4E] text-white px-4 py-2 rounded-md hover:bg-green-400">
              ذخیره
            </button>
          </div>

          <SearchProduct />
          <div className="flex justify-center mt-10">
            <table>
              <thead>
                <tr className="text-xs">
                  <th>کالا</th>
                  <th>قیمت</th>
                  <th>موجودی</th>
                </tr>
              </thead>
              <tbody>
                {data.cart.searchItems.map((item, index) => (
                  <InventoryManagementCart key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryManagement;
