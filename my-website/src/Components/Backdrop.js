import React from 'react';

const Backdrop = ({ show, clicked }) => {
	return show ? <div className="backdrop" onClick={clicked}></div> : null;
};

export default Backdrop;
