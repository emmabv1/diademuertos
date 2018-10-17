import React, {Component} from "react";

class Login extends Component {
    handleGoogleLogin = event =>{
        event.preventDefault();
        document.location.replace("/auth/google");
    }
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <button className="google" onClick={this.handleGoogleLogin}>Sign in with Google</button>
            </div>
        )
    }
};

export default Login;