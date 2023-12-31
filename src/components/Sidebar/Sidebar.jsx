import React from "react";
import "./sidebar.css";
import Logo from "./Logo/Logo";
import ProjSelection from "./ProjSelection/ProjSelection";
import Sidebarmenu from "./SidebarMenu/Sidebarmenu";
import Divisionline from "../../comman-components/Divisionline/Divisionline";
import Otherproject from "./Otherprojct/Otherproject";
import Favorites from "./Favorites/Favorites";

const Sidebar = (props) => {
  const { cancellIcon, onCancelClick } = props;

  const handleCancelClick = () => {
    if (onCancelClick) {
      onCancelClick();
    }
  };

  return (
    <div className="sidebar">
      {cancellIcon && (
        <div className="cancell-icon" onClick={handleCancelClick}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
      )}
      <Logo />
      <div className="items-sec">
        <ProjSelection />
        <Sidebarmenu />
        <Divisionline />
        <Otherproject />
        <Divisionline />
        <div style={{ margin: "auto" }}></div>
        <Favorites />
      </div>
    </div>
  );
};

export default Sidebar;
