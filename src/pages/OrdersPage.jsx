import Label from "../components/label/Label";
import Input from "../components/input/Input";

const Orders = () => {
  return (
    <>
      <div className="pt-52 pb-8 h-full vm:pt-24">
        <div>
          <div className="pt-10 flex justify-between items-center px-[32px]">
            <h2 className="text-xl font-bold">مدیریت سفارش ها</h2>
            <div className="flex flex-col justify-center items-start gap-8 vm:flex-row">
              <div className="flex justify-center items-center gap-1">
                <Label
                  htmlFor={"delivered"}
                  innerText={"سفارش های تحویل شده"}
                />
                <Input
                  type={"radio"}
                  id={"delivered"}
                  name={"order"}
                  value={"delivered"}
                />
              </div>
              <div className="flex justify-center items-center gap-1">
                <Label
                  htmlFor={"undelivery"}
                  innerText={"سفارش های در انتظار ارسال"}
                />
                <Input
                  type={"radio"}
                  id={"undelivery"}
                  name={"order"}
                  value={"undelivery"}
                />
              </div>
            </div>
          </div>

          <div className="m-auto w-[94%] mt-10">
            <table className="w-full">
              <thead>
                <tr className="text-xs">
                  <th>نام کاربر</th>
                  <th>مجموع مبلغ</th>
                  <th>زمان ثبت سفارش</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-[.8rem]"></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
