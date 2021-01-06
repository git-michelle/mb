import React from "react";
import { FaExclamation, FaRegCheckCircle } from "react-icons/fa";

const Alert = (props) => {
  let attachedClasses = [];
  let successIcon = <FaRegCheckCircle />;
  let warnIcon = <FaExclamation />;
  let icon;

  if (props.alertType === "success") {
    attachedClasses = ["alert-success", "floating-alert"];
    icon = successIcon;
  }
  if (props.alertType === "error") {
    attachedClasses = ["alert-warning", "floating-alert"];
    icon = warnIcon;
  }

  return (
    <div className="floating-alerts">
      {props.messages.map((msg, index) => {
        return (
          <div key={index} className={attachedClasses.join(" ")}>
            {icon} {msg}
          </div>
        );
      })}
    </div>
  );
};

export default Alert;
