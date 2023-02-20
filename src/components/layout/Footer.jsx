import { Fragment } from "react";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="flex justify-between items-center px-14 bg-white ">
          <div className="flex-1">
            <div className="mt-2">
              <Logo />
            </div>
            <p className="text-sm leading-6 mt-2 text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت
            </p>
          </div>
          <div className="flex-1 text-left self-start">
            <button className="bg-[#003865] text-white px-4 py-2 rounded-md mt-2">
              تماس با ما
            </button>
          </div>
        </div>
        <div>
          <p className="px-14 py-4 text-[#aaa] border-t-2 mt-4">
            تمامی حقوق این سایت محفوظ میباشد
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
