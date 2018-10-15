import React, {Component} from "react";
import Register from "./Register";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import {fetchUsers} from '../actions/user-actions';
import {fetchSession} from '../actions/authState-actions';

class Item extends Component {

    state = {
        open: false,
        modal: {display: "none"}
    }

    toggleModal = () => {
        if (this.state.open) {
            this.setState({open: false, modal: {display: "none"}});
        }
        else {
            this.setState({open: true, modal: {display: "block"}});
        }
        console.log("click");
    }

    render() {
        return (
            <div>
                
            <Grid columns={3} gap="2px">
                <Cell><img onClick={this.toggleModal} src={this.props.image} className="image"/></Cell>
                <Cell><h3>{this.props.name}</h3></Cell>
                <Register
                    itemname = {this.props.name}
                    bringing = {this.props.bringing}
                />
                <Cell style={this.state.modal} width={3}><p>{this.props.description}</p></Cell>
            </Grid>
            </div>
            
        )
    }
};

Item.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Item);