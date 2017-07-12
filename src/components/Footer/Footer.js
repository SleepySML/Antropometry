import React from 'react';
import './Footer.scss';
import Logo from '../../static/images/AntLogo1.png';

class HomePage extends React.Component {
    render() {
        return (
            <div className="row footer">
                <img src={Logo} className="logo-footer" alt="Logo"/>
            </div>
        );
    }
}

export default HomePage;
