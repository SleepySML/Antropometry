import React from 'react';
import './signUpForm.scss';

class SignUpForm extends React.Component {
    render(){
        return (
            <div className="signUpForm">
                <form>
                    <div>
                        <span>Sign Up</span>
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
                            <label>Email address:
                                <input name="email"
                                       type="email"/>
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
                    <div>
                        <button className="loginBtn button  success">Sign Up</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignUpForm;