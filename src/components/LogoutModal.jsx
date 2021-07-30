import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';

import '../assets/styles/components/LogoutModal.scss'

const LogoutModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
            <div className="Logout__container">
                <h3 className="Logout__title">You're about to be signed out of VideoTube</h3>
                <p className="Logout__subtitle">You'll be redirected to the home page</p>
                <div className="Button__container">
                    <Link to="/">
                        <button type="button" className="Button__continue">Continue</button>
                    </Link>
                </div>
            </div>
        </Modal>
    );
}

export default LogoutModal;