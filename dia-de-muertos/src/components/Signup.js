import React, {Component} from "react";
import axios from "axios";

class Signup extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirm: ""
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        axios.post("/api/users", {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
    };

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form>
                    <div>
                        <div>
                            <label>Name</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
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
                        <div>
                            <label>Confirm Password</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="confirm"
                                name="confirm"
                                placeholder="Confirm Password"
                                value={this.state.confirm}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={this.handleSubmit}
                        >Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default Signup;