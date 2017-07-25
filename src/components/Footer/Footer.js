import React from 'react';
import './Footer.scss';

import Logo from '../../static/images/body-logo.svg';

class HomePage extends React.Component {
    render() {
        return (
        <footer>
            <div className="row footer-wrapper">
                <div className="column large-1 footer_logo">
                    <Logo/>
                </div>
            </div>
        </footer>
        );
    }
}

export default HomePage;
