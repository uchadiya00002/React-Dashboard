import "./navbar.scss";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { Tooltip } from "@mui/material";
import Notification from "../notification/Notification";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleToggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageIcon className="icon" />
            English
          </div> */}
          <div className="item">
            <Tooltip title="Dark Mode">

            <DarkModeIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
              style={{ cursor: "pointer" }}
              />
              </Tooltip>
          </div>
          {/* <div className="item">
            <FullscreenExitIcon className="icon" />
          </div> */}
          <div className="item" onClick={handleToggleNotification}>
          <Tooltip title="Check Notification">

            <NotificationsNoneIcon
            style={{cursor:"pointer"}}
            className="icon" />
            </Tooltip>
            <div className="counter">1</div>
          </div>
          {isNotificationOpen && <Notification isNotificationOpen ={isNotificationOpen} handleToggleNotification={handleToggleNotification} setIsNotificationOpen={setIsNotificationOpen} />}

          {/* <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">2</div>
          </div> */}
          {/* <div className="item">
            <ListOutIcon className="icon" />
          </div> */}
<Link to="/profile" style={{ textDecoration: "none" }}>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/5720781/pexels-photo-5720781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="avatar"
            />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
