import React from 'react';

import '../assets/styles/components/ErrorMessage.scss'
import ImgError from '../assets/static/ImgDataError.svg'

const ErrorMessage = () => (
    <div className="ErrorMessage_container">
        <img className="ErrorMessage__img" src={ImgError} alt="Error image" />
    </div>
)

export default ErrorMessage;