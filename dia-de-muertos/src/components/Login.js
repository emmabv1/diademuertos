import React, {Component} from "react";
import axios from "axios";

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        // axios.post("/api/users", {
        //     name: this.state.name,
        //     email: this.state.email,
        //     password: this.state.password
        // })
        //     .then(res => {console.log(res)})
        //     .catch(err => {console.log(err)})
    };

    handleGoogleLogin = event =>{
        event.preventDefault();
        document.location.replace("http://localhost:8080/auth/google")
      }; 

    render() {
        return (
            <div>
                <h2>Log In</h2>
                <form>
                    <div>
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Password</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={this.handleGoogleLogin}
                        >Log In</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default Login;