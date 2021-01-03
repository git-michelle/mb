import React from "react";
import { CgMenu } from "react-icons/cg";

const DrawerToggle = (props) => {
  return (
    <div className="burger" onClick={props.clicked}>
      <CgMenu />
    </div>
  );
};

export default DrawerToggle;
