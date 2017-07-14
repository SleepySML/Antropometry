import React, { Component } from 'react';
//import LoginForm from '../Header/LoginForm';
//import SignUpFormm from  '../Header/SignUpForm';
import './HomePage.scss';
import {} from 'react-foundation';
import Slider from '../Slider/Slider';

class HomePage extends Component {
    render() {
        return (
            <div className="row homePage">
                <Slider/>
            </div>
        );
    }
}

export default HomePage;
