import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../static/images/AntLogoHeader.png';
import SkyLight from 'react-skylight';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';


const popUpStyle = {
    width: "inherit",
    height: "inherit",
    padding: 0,
    marginLeft: -15+"%",
    overflow: "hidden",
    borderRadius: 5+"px"
};

class Navigation extends React.Component {
    constructor(){
        super();
        this.state={
            Login: false
        };

        this.onMenuIconClick = this.onMenuIconClick.bind(this);
        this.onLogIn = this.onLogIn.bind(this);

    }

    onMenuIconClick(){

        let displayMenu = document.querySelector('.menu').style.display;
        if(displayMenu === "none" || displayMenu === ""){
            document.querySelector('.menu').style.display = "block";
        }
        else {
            document.querySelector('.menu').style.display = "none";
            document.querySelector('.menu').removeAttribute('style');
        }

    }

    onLogIn(){
        this.setState({Login: true});
        document.querySelector('.black-overlay').style.display = "block";
        document.querySelector('.envelope').style.display = "block";
    }

    render() {
        return (
            <nav>
                <div className="navigation-wrapper">
                    <div className="menu-icon menu-toggle" onClick={this.onMenuIconClick}></div>
                    <ul className="menu">
                        <li className="nav-link">
                            <NavLink className="header-logo-link" activeClassName="activelogo" exact to="/">
                                <img alt="Logo"/>
                            </NavLink>
                        </li>
                        <li className="nav-link"><NavLink to="/" className="menu-link" exact activeClassName="active">Home</NavLink></li>
                        <li className="nav-link"><NavLink to="/notes" className="menu-link" activeClassName="active">Notes</NavLink></li>
                        <li className="nav-link"><NavLink to="/statistic" className="menu-link" activeClassName="active">Statistic</NavLink></li>
                        <li className="nav-link nav-button" ><button  id="signUp-btn" className="button" onClick={() => this.refs.onAuthSignUp.show()}>SIGNS UP</button></li>
                        <li className="nav-link nav-button" ><button  id="login-btn" className="button" onClick={() => this.refs.onAuthLogin.show()}>LOGIN</button></li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <SkyLight dialogStyles={popUpStyle} hideOnOverlayClicked ref="onAuthLogin" >
                    <LoginForm/>
                    <div style={{clear: "both"}}></div>
                </SkyLight>
                <SkyLight dialogStyles={popUpStyle} hideOnOverlayClicked ref="onAuthSignUp" >
                    <SignUpForm/>
                    <div style={{clear: "both"}}></div>
                </SkyLight>

            </nav>
        );
    }
}

export default Navigation;
