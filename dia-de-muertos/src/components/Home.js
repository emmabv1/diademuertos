import React, {Component} from "react";
import axios from "axios";
import Item from "./Item"
import items from "../items.json";

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
                            />
                        </div>
                    ))}
                    
                </div>
            </div>
        )
    }
};

export default Home;