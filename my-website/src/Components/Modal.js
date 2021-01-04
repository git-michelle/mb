import React, { Fragment } from "react";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  let attachedClasses = ["modal", "box-shadow", "modal-hide"];
  if (props.show) {
    attachedClasses = ["modal", "box-shadow", "modal-show"];
  }

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div className={attachedClasses.join(" ")}>{props.children}</div>
    </Fragment>
  );
};

export default Modal;
