import React, { Fragment } from "react";
import Backdrop from "./Backdrop";
import { VscClose } from "react-icons/vsc";

const Modal = (props) => {
  let attachedClasses = ["modal", "box-shadow", "modal-hide"];
  if (props.show) {
    attachedClasses = ["modal", "box-shadow", "modal-show"];
  }

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div className={attachedClasses.join(" ")}>
        <div className="carousel-info-right">
          <button type="button" onClick={props.close}>
            <VscClose className="close-icon" />
          </button>
        </div>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
