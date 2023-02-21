import * as React from "react";
import { Fragment } from "react";
import WatchCart from "../components/WatchCart";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.cart.items);
  console.log(data);
  // const dommy = [
  //   { url: "../images/watch/dress1.jpg", id: 1 },
  //   { url: "../images/watch/dress2.jpg", id: 2 },
  //   { url: "../images/watch/dress3.jpg", id: 3 },
  //   { url: "../images/watch/dress4.jpg", id: 4 },
  // ];
  return (
    <Fragment>
      <div className="mt-20">
        <h2>کالاهای گروه موبایل</h2>
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
