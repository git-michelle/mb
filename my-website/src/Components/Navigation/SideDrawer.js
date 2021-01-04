import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import Backdrop from "../Backdrop";

const SideDrawer = (props) => {
  let attachedClasses = ["side-drawer", "close-drawer"];
  if (props.open) {
    attachedClasses = ["side-drawer", "box-shadow", "open-drawer"];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Link to="/" onClick={props.closed}>
          <img
            className="logo"
            src="/images/logo-m.png"
            alt="letter m in circle"
          />
        </Link>
        <NavItems sideDrawerState={props.closed} />
      </div>
    </Fragment>
  );
};

export default SideDrawer;
