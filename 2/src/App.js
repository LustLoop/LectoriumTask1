import './App.css';
import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValidity: false,
            passwordValidity: false
        }
    }

    handleInput = (e) => {
        const inputTitle = e.target.name;
        const inputValue = e.target.value;
        this.setState({[inputTitle]: inputValue},
            () => { this.validateField(inputTitle, inputValue) });
    }

    validateField(inputTitle, inputValue) {
        let emailValidity = this.state.emailValidity;
        let passwordValidity = this.state.passwordValidity;

        if (inputTitle === "email") {
            emailValidity = inputValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        } else {
            passwordValidity = inputValue.length >= 6;
        }

        this.setState({
            emailValidity: emailValidity,
            passwordValidity: passwordValidity
        });
    }

    isValid() {
        return this.state.emailValidity && this.state.passwordValidity ? 'valid' : 'invalid'
    }



    render () {
        return (
            <div className="container">
                <h1>Stackfindover</h1>
                <form>
                    <h2>Sign in your account</h2>
                    <label>
                        Email
                        <input className={this.state.emailValidity ? "valid-field-input" : "invalid-field-input"} type="email" name="email"
                               value={this.state.email} onChange={this.handleInput}/>
                    </label>
                    <label>
                        Password
                        <a href="https://www.google.com/">Forgot your password?</a>
                        <input className={this.state.passwordValidity ? "valid-field-input" : "invalid-field-input"} type="password" name="password"
                               value={this.state.password} onChange={this.handleInput} />
                    </label>
                    <label>
                        <input type="checkbox" />
                        Stay signed in for a week
                    </label>
                    <button className={this.isValid()}>Continue</button>
                    <p><a href="https://www.google.com.ua/maps">Use single sign-on (Google) instead</a></p>
                </form>
                <p>Don't have an account? <a href="https://uk-ua.facebook.com/">Sign up</a></p>
            </div>
        )
    }
}

export default App;
