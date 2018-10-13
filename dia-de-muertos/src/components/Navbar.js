import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import {Route, Link} from 'react-router-dom';
import PropTypes from "prop-types";
import axios from "axios";
import {connect} from "react-redux";

import {fetchSession} from '../actions/authState-actions';

class Navbar extends Component {

    componentDidMount() {
        console.log(this.props.authState);
    }

    logout = () => {
        axios.get("/auth/logout")
        .then(res => console.log(res.data))
        .then(() => this.props.fetchSession())
        .then(() => console.log(this.props.authState))
      }

    render() {
        if (!this.props.authState) {
            return(
                <div className="navbar">
                    <section>
                    {/* <span>Welcome {this.props.authState}</span>
                    <Link to="/"><span>Home</span></Link>
                    <Link to="/signup"><span>Sign Up</span></Link> */}
                    <Link to="/login"><span>Log In</span></Link>
                    {/* <span onClick={this.logout}>Log Out</span>
                    <Link to="/shoplist"><span>Shopping List</span></Link> */}
                    </section>
                </div>
            )
        }

        else {
            return(
                <div className="navbar">
                    <section>
                    <span>Welcome {this.props.users.name}</span>
                    <Link to="/"><span>Home</span></Link>
                    <Link to="/signup"><span>Sign Up</span></Link>
                    {/* <Link to="/login"><span>Log In</span></Link> */}
                    <span onClick={this.logout}>Log Out</span>
                    <Link to="/shoplist"><span>Shopping List</span></Link>
                    </section>
                    
                </div>
            )
        }

    }

};

Navbar.propTypes = {
   // fetchUsers: PropTypes.func.isRequired,
    fetchSession: PropTypes.func.isRequired,
    users: PropTypes.object,
    authState: PropTypes.object
   // newUser: PropTypes.object
};

const mapStateToProps = state => ({
    users: state.users.items,
    authState: state.authState.loggedInUserId
    // newUser: state.users.items
});

const mapDispatchToProps = {
 // fetchUsers,
  fetchSession
};

//export default User;

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

//export default Navbar;