import React, { Component } from "react";
import { routerServices } from "../services/RouterServices";

class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            userName:'',
            password:''
        }
        this.userNameHandler = this.userNameHandler.bind(this); // Binding event handler to the constructor 
        this.passwordHandler = this.passwordHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }
    userNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }
    passwordHandler = (event) => {
        this.setState({password: event.target.value})
    }
    loginHandler(){
        //Login Validations
        this.props.navigate("/dashboard");
    }

    render() {
        return (
        <div>
            <h2>Login</h2>
            <form>
            <p>
                <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={this.userNameHandler}
                required
                ></input>
            </p>
            <p>
                <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.passwordHandler}
                required
                ></input>
            </p>
            <p>
                <button className="btn btn-success" onClick={this.loginHandler}>
                Save
                </button>
            </p>
            </form>
            <div id="create-account-wrap">
            <p>
                Not a member? <a href="https://www.googole.com">Create Account</a>
            </p>
            </div>
        </div>
        );
    }
}

export default routerServices(LoginForm);