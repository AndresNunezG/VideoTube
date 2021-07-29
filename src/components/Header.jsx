import React, { useState } from 'react';

import LogoutModal from './LogoutModal';

import '../assets/styles/components/Header.scss'

function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(undefined);
    const handleOpenModal = (e) => {
        setModalIsOpen(true)
    }
    const handleCloseModal = (e) => {
        setModalIsOpen(false)
    }
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
                        <button>
                            Account
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={handleOpenModal}>
                            Sign out
                        </button>
                    </li>
                    <LogoutModal onCloseModal={handleCloseModal} isOpen={modalIsOpen} />
                </ul>
            </div>
        </header>
    );
}

export default Header;