import React, {Component} from "react";
import items from "../items.json"

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
                    </ul>
                </div>
            
            </div>
        )
    }
};

export default ShopList;