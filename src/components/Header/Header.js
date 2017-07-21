import React from 'react';
import Navigation from './Navigation';
import './Header.scss';


class Header extends React.Component {
    render() {
        return (
                <header>
                        <Navigation/>
                </header>
        );
    }
}

export default Header;