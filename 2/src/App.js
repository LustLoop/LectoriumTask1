import './App.css';
import React, { Component } from "react";

class App extends Component {
    render () {
        return (
            <div className="container">
                <h1>Stackfindover</h1>
                <form className="login-form">
                    <h2>Sign in your account</h2>
                    <label>
                        Email
                        <input className="field-input" type="email" />
                    </label>
                    <label>
                        Password
                        <p>Forgot your password?</p>
                        <input className="field-input" type="password" />
                    </label>
                    <label>
                        <input type="checkbox" />
                        Stay signed in for a week
                    </label>
                    <button>Continue</button>
                    <p>Use single sign-on (Google) instead</p>
                    <p>Don't have an account? <a href="/">Sign up</a></p>
                </form>
            </div>
        )
    }
}

export default App;
