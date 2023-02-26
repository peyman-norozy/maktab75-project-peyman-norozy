import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDataPanel } from "../store/cart-actions";

const ManagementPanel = () => {
  const data = useSelector((state) => state.user.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataPanel());
  }, [dispatch]);

  console.log(data);

  if (data.length === 0) {
    return;
  }

  return (
    <>
      <div>peyman</div>
    </>
  );
};

export default ManagementPanel;
