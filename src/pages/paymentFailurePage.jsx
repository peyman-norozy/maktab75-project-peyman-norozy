import LazyLoad from "react-lazy-load";

const PaymentFailure = () => {
  return (
    <>
      <>
        <div className="pt-44 h-full flex flex-col hm:flex-row justify-center items-center w-[50%] m-auto gap-8">
          <div className="flex justify-center w-[300px]">
            <LazyLoad>
              <img src="/images/icon/failure.png" alt="" className="w-full" />
            </LazyLoad>
          </div>
          <p className="flex-1 text-center">
            پرداخت موفقیت آمیز نبود، سفارش شما در اتظار پرداخت است
          </p>
        </div>
      </>
    </>
  );
};

export default PaymentFailure;
