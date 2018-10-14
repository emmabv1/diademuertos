import React, {Component} from "react";
import Register from "./Register";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import axios from "axios";
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

    register = event => {
        event.preventDefault();
        axios.post(`/api/users/${this.props.users._id}`, {
            item: this.props.name,
        })
            .then(res => {
                console.log(res);
                this.props.fetchUsers(this.props.users._id);
            })
            .catch(err => {console.log(err)})
    };

    render() {
        <Register
            itemname = {this.props.name}
            bringing = {this.props.bringing}
        />
        if (typeof this.props.bringing === "string") {
            return (
                <div>
                    <Register
            itemname = {this.props.name}
            bringing = {this.props.bringing}
        />
                <Grid columns={3} gap="2px">
                    <Cell><img onClick={this.toggleModal} src={this.props.image} className="image"/></Cell>
                    <Cell><h3>{this.props.name}</h3></Cell>
                    <Cell><h4>{this.props.bringing}</h4></Cell>
                    <Cell style={this.state.modal} width={3}><p>{this.props.description}</p></Cell>
                </Grid>
                </div>
                
            )
        }

        else {
            return (
                <div><Register
                itemname = {this.props.name}
                bringing = {this.props.bringing}
            />
                    <Grid columns={3} gap="2px">
                        <Cell><img onClick={this.toggleModal} src={this.props.image} className="image"/></Cell>
                        <Cell><h3>{this.props.name}</h3></Cell>
                        <Cell><button onClick={this.register} className="button">Register</button></Cell>
                        <Cell style={this.state.modal} width={3}><p>{this.props.description}</p></Cell>
                    </Grid></div>
                
            )
        }
    }
};

//export default Item;

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