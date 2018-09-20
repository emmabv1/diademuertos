import React, {Component} from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {connect} from "react-redux";
import {fetchUsers} from '../actions/user-actions';

class User extends Component {

    // state = {
    //     users: []
    // }

    componentWillMount() {
        this.props.fetchUsers();

        // axios.get('/api/users')
        //     //.then(res => console.log(res))
        //     .then(data => this.setState({users: data.data}))
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.newUser) {
    //         this.props.users.unshift(nextProps.newUser);
    //     }
    // }

    render() {
        return (
           
            <div>
                 <h1>hi</h1>
                {this.props.users.map(user => (
                    <div key={user._id}>
                        <h3>{user.name}</h3>
                        <h4>{user.email}</h4>
                    </div>
                ))}
            </div>
        )
    }
};

User.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
   // newUser: PropTypes.object
};

const mapStateToProps = state => ({
    users: state.users.items
    // newUser: state.users.items
});

const mapDispatchToProps = {
  fetchUsers
};

//export default User;

export default connect(mapStateToProps, mapDispatchToProps)(User);