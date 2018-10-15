import React, {Component} from "react";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import PropTypes from "prop-types";
import axios from "axios";
import Item from "./Item"
import items from "../items.json";

import {fetchItems} from '../actions/item-actions';

class Home extends Component {
    state = {
        items
    }


    render() {
        return (
            <div  className="container">
                <h2 className="title">Altar Planner</h2>
                <div className="itemlist">
                    <p>Choose two items to bring. Click on image to open description.</p>
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

//export default Home;

Home.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array
};

const mapStateToProps = state => ({
    items: state.items.list
});

const mapDispatchToProps = {
    fetchItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);