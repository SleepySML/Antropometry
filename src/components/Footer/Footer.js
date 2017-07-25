import React from 'react';
import './Footer.scss';

import Logo from '../../static/images/body-logo.svg';

class HomePage extends React.Component {
    render() {
        return (
        <footer>
            <div className="row footer-wrapper">

                <Logo/>
            </div>
        </footer>
        );
    }
}

export default HomePage;
