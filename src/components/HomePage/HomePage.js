import React, { Component } from 'react';
//import LoginForm from '../Header/LoginForm';
import SignUpFormm from  '../Header/SignUpForm';
import './HomePage.scss';

class HomePage extends Component {
    render() {
        return (
            <div className="row homePage">
                <div className="row large-12 column">
                    <h1>This is HomePage</h1>
                </div>

                <SignUpFormm/>
            </div>
        );
    }
}

export default HomePage;
