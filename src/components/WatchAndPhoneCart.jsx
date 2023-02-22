const WatchAndPhoneCart = (props) => {
  return (
    <>
      <div className="flex gap-4 p-4 pb-0 bg-white">
        <div className="min-h-[100px] w-[300px] bg-[#F7F8FA]">
          <div className="w-full">
            <div className="flex flex-col items-center p-4">
              <div className="w-full">
                <img src={props.data.image} alt="fg" className="w-full" />
              </div>
              <div className="flex flex-col gap-2 justify-between text-sm w-full mt-2">
                <h3 className="text-lg">شیر تازه</h3>
                <div className="flex gap-6 justify-between">
                  <span>قیمت:</span>
                  <p>
                    200,000
                    <span>تومان</span>
                  </p>
                </div>
                <button className="bg-[#3CCF4E] text-white self-end px-2 py-2 rounded-sm">
                  خرید محصول
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchAndPhoneCart;
