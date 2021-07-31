import React, { useState, useEffect } from 'react';

const useModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(undefined);
    const handleOpenModal = (e) => {
        setModalIsOpen(true)
    }
    const handleCloseModal = (e) => {
        setModalIsOpen(false)
    }
    return [modalIsOpen, handleOpenModal, handleCloseModal]
}

export default useModal;