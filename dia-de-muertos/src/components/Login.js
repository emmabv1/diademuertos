import React, {Component} from "react";

class Login extends Component {
    handleGoogleLogin = event =>{
        event.preventDefault();
        document.location.replace("http://localhost:8080/auth/google");
    }
    render() {
        return (
            <div>
                <h2>Log In</h2>
                <button onClick={this.handleGoogleLogin}>Sign In With Google</button>
            </div>
        )
    }
};

export default Login;