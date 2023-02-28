import { Fragment } from "react";
import WatchAndPhoneCart from "../components/WatchAndPhoneCart";
import { useSelector } from "react-redux";
import Slider from "../components/Slider";
import "../index.css";

const Home = () => {
  const data = useSelector((state) => state.cart.items);
  console.log(data);

  let phone = 0;
  let watch = 0;

  if (data.length === 0) {
    return;
  }

  return (
    <Fragment>
      <Slider />
      {/* mobile group product in main page */}
      <div className="mt-20">
        <div className="flex justify-start">
          <h2 className="border-b-4 border-[#EF5B0C] rounded-sm pb-2">
            کالاهای گروه موبایل
          </h2>
        </div>
        <div className="grid__product bg-white gap-4 py-4 px-6">
          {data[0].mobile.map((item, index) => {
            if (phone < 4) {
              phone++;
              return <WatchAndPhoneCart key={index} data={item} />;
            } else {
              return "";
            }
          })}
        </div>
      </div>
      {/* watch group product in main page */}
      <div className="mt-20">
        <div className="flex justify-start">
          <h2 className="border-b-4 border-[#EF5B0C] rounded-sm pb-2">
            کالاهای گروه ساعت
          </h2>
        </div>
        <div className="grid__product bg-white gap-4 py-4 px-6">
          {data[0].watch.map((item, index) => {
            if (watch < 4) {
              watch++;
              return <WatchAndPhoneCart key={index} data={item} />;
            } else {
              return "";
            }
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
