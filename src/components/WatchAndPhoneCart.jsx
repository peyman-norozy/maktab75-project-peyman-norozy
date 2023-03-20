import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const WatchAndPhoneCart = (props) => {
  console.log(props);
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
                <LazyLoad>
                  <img
                    src={"http://localhost:3002" + props.data.image}
                    alt=""
                    className="w-full"
                  />
                </LazyLoad>
              </div>
              <div className="flex flex-col gap-4 justify-between text-sm w-full mt-4">
                <h3 className="text-[1rem] font-bold">{props.data.name}</h3>
                <div className="flex gap-6 justify-between">
                  <span>قیمت:</span>
                  <p>
                    {props.data.price}
                    <span>تومان</span>
                  </p>
                </div>
                <Link
                  to={`/singleProduct?id=${props.data.id}`}
                  className="bg-[#3CCF4E] text-white self-end px-2 py-2 rounded-sm"
                >
                  خرید محصول
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchAndPhoneCart;
