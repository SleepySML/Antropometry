import React from 'react';
import './loginForm.scss';

class LoginForm extends React.Component{
    render () {
        return (
            <div className="loginform">
                <form>
                    <div>
                        <span>Login</span>
                    </div>
                    <div>
                        <div>
                            <button className="loginBtn loginBtn--facebook">
                                Login with Facebook
                            </button>
                        </div>
                        <div>
                            <button className="loginBtn loginBtn--google">
                                Login with Google
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="span">or</div>
                    <hr/>
                    <div className="row">
                        <div className="large-12 columns">
                            <label>Username:
                                <input name="username"
                                       type="text"/>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns">
                            <label>Password:
                                <input name="password"
                                       type="password"/>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns span2">
                            <a>I forgot my password</a>
                        </div>
                    </div>
                    <div>
                        <button className="loginBtn button  success">Log In</button>
                    </div>

                </form>
            </div>
        );
    }
}


export default LoginForm;