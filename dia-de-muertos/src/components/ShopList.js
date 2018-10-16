import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import items from "../items.json";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ShopList extends Component {
    state = {
        list: items.filter(item => item.bringing === "Everyone")
    }

    render() {
        if (this.props.redirect === true) {
            return <Redirect to={"/login"}/>
        }

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

ShopList.propTypes = {
    users: PropTypes.object,
    redirect: PropTypes.bool
};

const mapStateToProps = state => ({
    users: state.users.items,
    redirect: state.authState.redirect
});

export default connect(mapStateToProps)(ShopList);