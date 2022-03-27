import React, { Fragment } from 'react';
import Backdrop from './Backdrop';
import { VscClose } from 'react-icons/vsc';

const Modal = ({ show, closeModal, close, children }) => {
	let attachedClasses = ['modal', 'box-shadow', 'modal-hide'];
	if (show) {
		attachedClasses = ['modal', 'box-shadow', 'modal-show'];
	}

	return (
		<Fragment>
			<Backdrop show={show} clicked={closeModal} />
			<div className={attachedClasses.join(' ')}>
				<div className="carousel-info-right">
					<button type="button" onClick={close}>
						<VscClose className="close-icon" />
					</button>
				</div>
				{children}
			</div>
		</Fragment>
	);
};

export default Modal;
