import React, {Component} from "react";
import items from "../items.json";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import axios from "axios";
import {fetchUsers} from '../actions/user-actions';
import {fetchSession} from '../actions/authState-actions';

class ShopList extends Component {
    state = {
        list: items.filter(item => item.bringing === "Everyone")
    }

    render() {
        return (
            <div>
                <img className="shoplist" src="https://image.ibb.co/cYstBe/list.png" alt="list" border="0"></img>
                <div className="list-content">
                    <h3>Your Shopping List</h3>
                    <ul>
                        {this.state.list.map(i => 
                            <li>{i.name}</li>    
                        )}
                        {this.props.users.items.map(i =>
                            <li>{i}</li>)}
                    </ul>
                </div>
            
            </div>
        )
    }
};

//export default ShopList;

ShopList.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    fetchSession: PropTypes.func.isRequired,
    users: PropTypes.object,
    authState: PropTypes.object
};

const mapStateToProps = state => ({
    users: state.users.items,
    authState: state.authState.loggedInUserId
});

const mapDispatchToProps = {
    fetchUsers,
    fetchSession
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);