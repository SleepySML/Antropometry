import React from 'react';
import './Footer.scss';

import Logo from '../../static/images/logoAntropometry.svg';

class HomePage extends React.Component {
    render() {
        return (
        <footer>
            <div className="row footer-wrapper">
                <div className="column small-2  large-1 footer_logo">
                    <Logo/>

                </div>
                <div className="footer-description">
                    <span>Made by Umbrella Corp.</span>
                </div>
            </div>
        </footer>
        );
    }
}

export default HomePage;
