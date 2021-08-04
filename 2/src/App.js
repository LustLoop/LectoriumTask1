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
                        <a href="https://www.google.com/">Forgot your password?</a>
                        <input className="field-input" type="password" />
                    </label>
                    <label>
                        <input type="checkbox" />
                        Stay signed in for a week
                    </label>
                    <button>Continue</button>
                    <p><a href="https://www.google.com.ua/maps">Use single sign-on (Google) instead</a></p>
                </form>
                <p>Don't have an account? <a href="https://uk-ua.facebook.com/">Sign up</a></p>
            </div>
        )
    }
}

export default App;
