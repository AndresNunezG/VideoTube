import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';

const LogoutModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
            <h3>You're about to be signed out of VideoTube</h3>
            <p>You'll be redirected to the home page</p>
            <Link to="/">
                <button type="button" className="Button__continue">Continue</button>
            </Link>
        </Modal>
    );
}

export default LogoutModal;