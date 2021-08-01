import React from 'react';
import Modal from './Modal';

import '../assets/styles/components/AccountModal.scss'

const AccountModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
            <div className="Account__container">
                <div className="Picture__container">
                    <i className="fas fa-user-circle"></i>
                </div>
                <div className="Details__container">
                    <div className="Detail__field">
                        <h3>Email:&nbsp;</h3>
                        <p>{props.accountData.email}</p>
                    </div>
                    <div className="Detail__field">
                        <h3>Name:&nbsp;</h3>
                        <p>{props.accountData.name}</p>
                    </div>
                    <div className="Detail__field">
                        <h3>Age:&nbsp;</h3>
                        <p>{props.accountData.age}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default AccountModal;