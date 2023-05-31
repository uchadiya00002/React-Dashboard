import "./widget.scss";
import UpIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationIcon from "@mui/icons-material/MonetizationOnOutlined";
// import { grey, red } from "@mui/material/colors";

const Widget = ({ type }) => {
  let data;
  //   temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USER",
        IsMoney: false,
        link: "See all users",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        IsMoney: false,
        link: "View all users",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{
              color: "golden",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        IsMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "MY BALANCE",
        IsMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.IsMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <UpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
