import React from 'react';
import { CgMenu } from 'react-icons/cg';

const DrawerToggle = ({ clicked }) => {
	return (
		<div className="burger" onClick={clicked}>
			<CgMenu />
		</div>
	);
};

export default DrawerToggle;
