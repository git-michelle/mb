import React, { Fragment } from "react";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div
        className="modal box-shadow"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
