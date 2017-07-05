import React from 'react';
import {Link} from 'react-router-dom';
import {ResponsiveNavigation} from 'react-foundation';

class Navigation extends React.Component {
    render() {
        return (
                <ResponsiveNavigation breakpoint="720">
                        <div className="top-bar-left">
                            <ul className="menu">
                                <li><Link to="/">Logo</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/notes">Notes</Link></li>
                                <li><Link to="/statistic">Statistic</Link></li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <ul className="menu">
                                <li><button className="button">Log in</button></li>
                                <li><button className="button">Sign up</button></li>
                            </ul>
                        </div>
                </ResponsiveNavigation>
        );
    }
}

export default Navigation;
