import React from 'react';
import Navigation from './Navigation';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <header className="row">
                        <Navigation/>
                </header>
            </div>

        );
    }
}

export default Header;