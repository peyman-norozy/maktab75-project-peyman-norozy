import Button from "./button/Button";

const WatchAndPhoneCart = (props) => {
  return (
    <>
      <div
        className={`flex justify-center items-center gap-4 bg-white rounded-lg ${
          props.styling ? props.styling.background1 : ""
        }`}
      >
        <div
          className={`min-h-[100px] w-[300px] bg-[#F7F8FA] ${
            props.styling ? props.styling.background2 : ""
          } ${props.styling ? props.styling.borderRadius : ""}`}
        >
          <div className="w-full">
            <div className="flex flex-col items-center p-4">
              <div className="w-full">
                <img
                  src={"http://localhost:3002" + props.data.image}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2 justify-between text-sm w-full mt-2">
                <h3 className="text-lg">{props.data.name}</h3>
                <div className="flex gap-6 justify-between">
                  <span>قیمت:</span>
                  <p>
                    {props.data.price}
                    <span>تومان</span>
                  </p>
                </div>
                <Button
                  className={
                    "bg-[#3CCF4E] text-white self-end px-2 py-2 rounded-sm"
                  }
                  innerText={"خرید محصول"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchAndPhoneCart;
