import { Fragment } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import ManagementNavigation from "../components/layout/ManagementNavigation";
import { userActions } from "../store/user-slice";

const ManagementPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/products", {
        headers: {
          token: localStorage.getItem("ACCESS_TOKEYN"),
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(
          userActions.addItemToPanel({
            items: res.data,
          })
        );
      })
      .catch((e) => {
        console.log(e);
        navigate("/management");
      });
  }, [dispatch]);

  return (
    <Fragment>
      <div className="relative">
        <ManagementNavigation />
        <Outlet />
      </div>

      {/* <div>
        {data.user.items.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div> */}
    </Fragment>
  );
};

export default ManagementPanel;
