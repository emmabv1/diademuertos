import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import items from "../items.json";

import {openModal, closeModal} from '../actions/modal-actions';

class Modal extends Component {

    items = items;
    
    // state = {
    //     content: items
    //     //display: {display: "block"},
    // }

    // openModal = () => {
        
    // }

    // closeModal = () => {
    //     this.setState({display: {display: "none"}})
    // }
    display = "block"

    style = {display: this.props.modalState}

    render() {
        return (
            <div className="modal" style={this.style}>
                <span>x</span>
                <p>{this.props.modalState}</p>
                {/* <img src={this.items[0].image} className="image"/>
                <p>{this.state.items.meaning}</p> */}
            </div>
        )
    }
}

Modal.propTypes = {
    modalState: PropTypes.string
};

const mapStateToProps = state => ({
modalState: state.modalState.display
});

const mapDispatchToProps = {
openModal,
closeModal
};
 
 //export default User;
 
export default connect(mapStateToProps, mapDispatchToProps)(Modal);

//export default Modal;