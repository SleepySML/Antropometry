import React from 'react';
import Navigation from './Navigation';
import './Header.scss';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <header>
                        <Navigation/>
                </header>
            </div>

        );
    }
}

export default Header;