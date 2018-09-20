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
            <div>
                <h2>Home</h2>
                <h3>Welcome {/*username*/}</h3>

                <div className="container">
                    {this.state.items.map(item => (
                    <Item 
                        key = {item.id}
                        image = {item.image}
                        name = {item.name}
                        bringing = {item.bringing}
                    />
                    ))}
                </div>
            </div>
        )
    }
};

export default Home;