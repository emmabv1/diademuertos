import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchSession} from '../actions/authState-actions';
import items from "../items.json"

class Register extends Component {
    state = {
        items
    }

    render() {
        return (
            <div>
                Register
            </div>
        )
    }
};

//export default Register;

Register.propTypes = {
    fetchSession: PropTypes.func.isRequired,
    users: PropTypes.object,
    authState: PropTypes.object
};

const mapStateToProps = state => ({
    users: state.users.items,
    authState: state.authState.loggedInUserId
});

const mapDispatchToProps = {
  fetchSession
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

// const arr = [{name: "1"}, {name: "3"}, {id: "whatever", name: ["3", "4", "5"]}];

// console.log(arr[0]);

// let filter = arr.filter(i => i.name.includes("3"))

// console.log(filter);

// if (filter.length > 0) {
// 	console.log("yep")
// }

// else {
// 	console.log("nope")
// }