import React from 'react';

import '../assets/styles/Home.scss'

class Home extends React.Component {
    render () {
        return (
            <div className="Home__container">
                <div className="Login__container">
                    <div className="Title__container">
                        <h1 className="Login__title-1">Video</h1>
                        <h1 className="Login__title-2">Tube&nbsp;</h1>
                        <i className="Login__title-icon fas fa-video"></i>
                    </div>
                    <div className="LoginForm__container">
                        <form className="LoginForm">
                            <div className="Field__container Field-name">
                                <label className="Field-label" htmlFor="name">Name</label>
                                <input className="Field-input" name="name" id="name"></input>
                            </div>
                            <div className="Field__container Field-email">
                                <label className="Field-label" htmlFor="email">Email</label>
                                <input className="Field-input" type="email" min="0" name="email" id="email"></input>
                            </div>
                            <div className="Field__container Field-age">
                                <label className="Field-label" htmlFor="age">Age</label>
                                <input className="Field-input" type="number" min="0" max="100" name="age" id="age"></input>
                            </div>
                            <div className="Button__container">
                                <button className="Button__login">Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;