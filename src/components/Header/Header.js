import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>This is Header</h2>
                <Navigation/>
            </div>
        );
    }
}

export default Header;