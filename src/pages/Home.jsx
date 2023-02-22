import * as React from "react";
import { Fragment } from "react";
import WatchCart from "../components/WatchCart";
import { useSelector } from "react-redux";
import Slider from "../components/Slider";

const Home = () => {
  const data = useSelector((state) => state.cart.items);
  console.log(data);

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
        <div className="flex">
          {data.map((item, index) => (
            <WatchCart data={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
