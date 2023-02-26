import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDataPanel } from "../store/auth-actions";
import { useNavigate } from "react-router-dom";

const ManagementPanel = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDataPanel());
  }, [dispatch]);

  console.log(data);
  if (data.user.error === 401) {
    navigate("/management");
  }

  return (
    <>
      <div>
        {data.user.items.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </>
  );
};

export default ManagementPanel;
