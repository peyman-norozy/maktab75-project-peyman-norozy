import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const InternetPayment = () => {
  const data = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.ui.myBasketLength) {
      navigate({
        pathname: "/payment",
        search: "",
      });
    } else {
      navigate({
        pathname: "/",
        search: "",
      });
    }
  }, [data.ui.myBasketLength, navigate]);

  return (
    <>
      <div>peyman</div>
    </>
  );
};

export default InternetPayment;
