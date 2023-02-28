import { useState } from "react";

const ProductManagement = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  return (
    <div>
      <div className="h-screen">
        <div className="pt-10 flex justify-between items-center">
          <h2 className="text-xl font-bold">مدیریت کالاها</h2>
          <button className="bg-[#3CCF4E] text-white px-4 py-2 rounded-md hover:bg-green-400">
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
              <tr className="text-xs">
                <td>
                  <div className="w-20">
                    <img src={require("./1.jpg")} alt="" />
                  </div>
                </td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
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
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-[#aaaaaa4d] absolute top-0 w-full h-full">
        <form>dfa</form>
      </div>
    </div>
  );
};

export default ProductManagement;
