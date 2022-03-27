import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItems from './NavItems';
import Backdrop from '../Backdrop';

const SideDrawer = ({ open, closed }) => {
	let attachedClasses = ['side-drawer', 'close-drawer'];
	if (open) {
		attachedClasses = ['side-drawer', 'box-shadow', 'open-drawer'];
	}

	return (
		<Fragment>
			<Backdrop show={open} clicked={closed} />
			<div className={attachedClasses.join(' ')}>
				<Link to="/" onClick={closed}>
					<img
						className="logo"
						src="/images/logo-m.png"
						alt="letter m in circle"
					/>
				</Link>
				<NavItems sideDrawerState={closed} />
			</div>
		</Fragment>
	);
};

export default SideDrawer;
