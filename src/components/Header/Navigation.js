import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/notes">notes</Link></li>
                    <li><Link to="/statistic">notes</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;
