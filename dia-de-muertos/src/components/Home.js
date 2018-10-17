import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import PropTypes from "prop-types";
import Item from "./Item"
import items from "../items.json";

class Home extends Component {
    state = {
        items
    }

    render() {
        if (this.props.redirect === true) {
            return <Redirect to={"/login"}/>
        }

        return (
            <div  className="container">
                <h2 className="title">Altar Planner</h2>
                <div className="itemlist">
                    <p>Choose an item to bring. Click on image to view description.</p>
                    {this.state.items.map(item => (
                        <div>
                            <hr></hr>
                            <Item 
                                key = {item.id}
                                image = {item.image}
                                name = {item.name}
                                bringing = {item.bringing}
                                description = {item.meaning}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

Home.propTypes = {
    redirect: PropTypes.bool
};

const mapStateToProps = state => ({
    redirect: state.authState.redirect
});

export default connect(mapStateToProps)(Home);