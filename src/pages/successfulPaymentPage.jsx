const SuccessfulPayment = () => {
  return (
    <>
      <div className="pt-44 h-full flex flex-col hm:flex-row justify-center items-center w-[50%] m-auto">
        <div className="flex justify-center w-[300px]">
          <img src="/images/icon/successful.png" alt="" className="w-full" />
        </div>
        <p className="flex-1 text-center">
          با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسال با شما
          تماس گرفته خواهد شد.
        </p>
      </div>
    </>
  );
};

export default SuccessfulPayment;
