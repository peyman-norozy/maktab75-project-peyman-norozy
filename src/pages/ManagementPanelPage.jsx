import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDataPanel } from "../store/auth-actions";
import { useNavigate, Outlet } from "react-router-dom";
import ManagementNavigation from "../components/layout/ManagementNavigation";

const ManagementPanel = (props) => {
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
    <Fragment>
      <ManagementNavigation />
      <Outlet />
      {/* <div>
        {data.user.items.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div> */}
    </Fragment>
  );
};

export default ManagementPanel;
