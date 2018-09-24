import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import items from "../items.json"

class Modal extends Component {
    state = {
        content: items,
        display: {display: "block"},
    }

    openModal = () => {
        
    }

    closeModal = () => {
        this.setState({display: {display: "none"}})
    }

    render() {
        return (
            <div className="modal" style={this.state.display}>
                <span onClick={this.closeModal}>x</span>
                <p>{this.state.content[0].name}</p>
                <img src={this.state.content[0].image} className="image"/>
                <p>{this.state.content[0].meaning}</p>
            </div>
        )
    }
}

export default Modal;