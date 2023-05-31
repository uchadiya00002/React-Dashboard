import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UserIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import OrdersIcon from "@mui/icons-material/CreditCard";
import DeliveryIcon from "@mui/icons-material/LocalShippingOutlined";

import InputOutIcon from "@mui/icons-material/InputOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dropship</span>
        </Link>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>

          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <UserIcon className="icon" />
              <span>User</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <Link to="/orders" style={{ textDecoration: "none" }}>
          <li>
            <OrdersIcon className="icon" />
            <span>Order</span>
          </li>
          </Link>
          
          <Link to="/deliveries" style={{ textDecoration: "none" }}>
          <li>
            <DeliveryIcon className="icon" />
            <span>Delivery</span>
          </li>
          </Link>
          

          {/* <p className="title">USEFUL</p>
          <li>
            <StatsIcon className="icon" />
            <span>Stats</span>
          </li> */}
          {/* <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li> */}
          {/* <p className="title">SERVICES</p> */}
          {/* <li>
            <SettingsIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Logs</span>
          </li> */}
          {/* <li>
            <SettingsIcon className="icon" />
            <span>settings</span>
          </li> */}
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <InputOutIcon className="icon" />
            <span>Profile</span>
          </li>
</Link>
            <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <InputOutIcon className="icon" />
            <span>Logout</span>
          </li>
</Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
