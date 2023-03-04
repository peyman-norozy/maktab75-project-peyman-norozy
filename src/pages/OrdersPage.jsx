const Orders = () => {
  return (
    <>
      <div className="pt-52 pb-8 h-full vm:pt-24">
        <div>
          <div className="pt-10 flex justify-between items-center px-[32px]">
            <h2 className="text-xl font-bold">مدیریت سفارش ها</h2>
            <div className="flex flex-col justify-center items-start gap-8 vm:flex-row">
              <div className="flex justify-center items-center gap-1">
                <label htmlFor="delivered">سفارش های تحویل شده</label>
                <input
                  type="radio"
                  id="delivered"
                  name="order"
                  value="delivered"
                />
              </div>
              <div className="flex justify-center items-center gap-1">
                <label htmlFor="undelivery">سفارش های در انتظار ارسال</label>
                <input
                  type="radio"
                  id="undelivery"
                  name="order"
                  value="undelivery"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <table>
              <thead>
                <tr className="text-xs">
                  <th>نام کاربر</th>
                  <th>مجموع مبلغ</th>
                  <th>زمان ثبت سفارش</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-[.8rem]">
                <tr>
                  <td>اکبر زمانی</td>
                  <td>920,000</td>
                  <td>1399/1/5</td>
                  <td>
                    <button className="bg-[#00aec5] text-white py-[4px] px-[4px] rounded-[4px] hover:bg-[#00c8e2]">
                      بررسی سفارش
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
