import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Alert = (props) => {
  const { alertList, position } = props;

  const [list, setList] = useState(alertList);

  useEffect(() => {
    setList(alertList);
  }, [alertList, list]);

  return (
    <>
      <div className={`alert-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`alert toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button>x</button>
            <div className="alert-image">
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className="alert-title">{toast.title}</p>
              <p className="alert-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Alert.defaultProps = {
  position: "bottom-right",
};

Alert.propTypes = {
  alertList: PropTypes.array.isRequired,
  position: PropTypes.string,
};

export default Alert;
