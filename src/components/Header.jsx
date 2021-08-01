import React from 'react';
import { withRouter } from 'react-router-dom';

import LogoutModal from './LogoutModal';
import AccountModal from './AccountModal';

import useModal from '../hooks/useModal';
import '../assets/styles/components/Header.scss'

function Header(props) {
    if (props.location.pathname == "/") return null;
    const [modalLogoutIsOpen, handleOpenLogoutModal, handleCloseLogoutModal] = useModal();
    const [modalAccountIsOpen, handleOpenAccountModal, handleCloseAccountModal] = useModal();
    return (
        <header className="Header__container">
            <div className="Header__title-container">
                <h1 className="Header__title-1">Video</h1>
                <h1 className="Header__title-2">Tube&nbsp;</h1>
                <i className="Header__title-icon fas fa-video"></i>
            </div>
            <div className="Header__menu">
                <div className="Header__profile-container">
                    <i className="Header__menu-icon far fa-user"></i>
                    <h2>&nbsp;Profile</h2>
                </div>
                <ul className="Header__ddlist">
                    <li>
                        <button type="button" onClick={handleOpenAccountModal}>
                            Account
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={handleOpenLogoutModal}>
                            Sign out
                        </button>
                    </li>
                    <AccountModal
                        onCloseModal={handleCloseAccountModal}
                        isOpen={modalAccountIsOpen}
                        accountData={props.location.state}
                    />
                    <LogoutModal
                        onCloseModal={handleCloseLogoutModal}
                        isOpen={modalLogoutIsOpen}
                    />
                </ul>
            </div>
        </header>
    );
}

export default withRouter(Header);