import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import {fetchUsers} from '../actions/user-actions'
import {fetchItems} from '../actions/item-actions';

class Register extends Component {

    register = event => {
        event.preventDefault();
        axios.post(`/api/users/${this.props.users._id}`, {
            item: this.props.itemname,
        })
            .then(res => {
                console.log(res);
                this.props.fetchUsers(this.props.users._id);
                this.props.fetchItems();
            })
            .catch(err => {console.log(err)})
    };

    render() {
        
        if (this.props.items.length && this.props.items.filter(i => i.items.includes(this.props.itemname)).length > 0) {
            console.log(this.props.items.filter(i => i.items.includes(this.props.itemname))[0]._id)
            let registree = 0;
            return (
                <div>
                    <h4>{this.props.items.filter(i => i.items.includes(this.props.itemname))[0].name}</h4>
                </div>
            )
        }

        if (this.props.items.length && this.props.items.filter(i => i.items.includes(this.props.itemname)).length > 0) {
            console.log(this.props.items.filter(i => i.items.includes(this.props.itemname))[0]._id)
            let registree = 0;
            return (
                <div>
                    <h4>{this.props.users.name}Registered</h4>
                </div>
            )
        }

        else if (typeof this.props.bringing === "string") {
            return(
                <div>
                    <h4>{this.props.bringing}</h4>
                </div>
            )
            
        }

        else return(
            <div>
                <button onClick={this.register} className="button">Register</button>
            </div>
        )
        
    }
};

Register.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.object,
    authState: PropTypes.object,
    items: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
    users: state.users.items,
    authState: state.authState.loggedInUserId,
    items: state.items.list
});

const mapDispatchToProps = {
  fetchItems,
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);