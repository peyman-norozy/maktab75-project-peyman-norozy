import * as React from "react";
import { Fragment } from "react";
import WatchCart from "../components/WatchCart";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.cart.items);
  console.log(data);

  return (
    <Fragment>
      <div className="mt-20">
        <div className="flex justify-start ">
          <h2 className="border-b-4 border-[#bae]">کالاهای گروه موبایل</h2>
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
