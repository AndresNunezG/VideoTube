import React from 'react';

import ImgWave1 from '../assets/static/ImgWave1.svg'
import ImgWave2 from '../assets/static/ImgWave2.svg'
import '../assets/styles/Home.scss'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }
    handleClick = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.age && this.state.email) {
            this.props.history.push({
                pathname: '/browse',
                state: {...this.state}
            });
        }
        else {
            alert('campo vacio')
        }
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }
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
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    className="Field-input"
                                    name="name"
                                    id="name">
                                </input>
                            </div>
                            <div className="Field__container Field-email">
                                <label className="Field-label" htmlFor="email">Email</label>
                                <input
                                    onChange={this.handleChange}
                                    className="Field-input"
                                    value={this.state.email}
                                    type="email"
                                    name="email"
                                    id="email">
                                </input>
                            </div>
                            <div className="Field__container Field-age">
                                <label className="Field-label" htmlFor="age">Age</label>
                                <input
                                    onChange={this.handleChange}
                                    className="Field-input"
                                    value={this.state.age}
                                    type="number" min="0"
                                    max="100" name="age"
                                    id="age">
                                </input>
                            </div>
                            <div className="Button__container">
                                <button onClick={this.handleClick} type="button" className="Button__login">Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="Background__container">
                    <div className="Image__container">
                        <div className="Image__container-1">
                            <img src={ImgWave2} alt="imgwave2" />
                        </div>
                        <div className="Image__container-2">
                            <img src={ImgWave1} alt="imgwave1" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;