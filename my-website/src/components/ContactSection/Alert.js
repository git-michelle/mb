import React from "react";

const Alert = (props) => {
  return (
    <div className="floating-alerts">
      {props.messages.map((msg, index) => {
        return (
          <div key={index} className="alert alert-success floating-alert">
            {msg}
          </div>
        );
      })}
    </div>
  );
};

export default Alert;
