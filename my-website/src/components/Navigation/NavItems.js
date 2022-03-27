import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavItems = ({ sideDrawerState }) => {
	return (
		<div>
			<ul>
				<li>
					<HashLink
						smooth
						to="/#about"
						className="nav-link"
						onClick={sideDrawerState}
					>
						About
					</HashLink>
				</li>
				<li>
					<HashLink
						smooth
						to="/#projects"
						className="nav-link"
						onClick={sideDrawerState}
					>
						Projects
					</HashLink>
				</li>
				<li>
					<HashLink
						smooth
						to="/#contact"
						className="nav-link"
						onClick={sideDrawerState}
					>
						Contact
					</HashLink>
				</li>
			</ul>
		</div>
	);
};

export default NavItems;
