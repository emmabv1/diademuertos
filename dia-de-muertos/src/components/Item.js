import React, {Component} from "react";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";

class Item extends Component {
    

    render() {
        if (typeof this.props.bringing === "string") {
            return (

                <Grid columns={3} gap="2px">
                    <Cell><img src={this.props.image} className="image"/></Cell>
                    <Cell><h3>{this.props.name}</h3></Cell>
                    <Cell><h4>{this.props.bringing}</h4></Cell>
                </Grid>
                // <div>
                //     <img src={this.state.items[0].image}/><h3>{this.state.items[0].name}</h3><button>Register</button>
                // </div>
            )
        }

        else {
            return (

                <Grid columns={3} gap="2px">
                    <Cell><img src={this.props.image} className="image"/></Cell>
                    <Cell><h3>{this.props.name}</h3></Cell>
                    <Cell><button>Register</button></Cell>
                </Grid>
                // <div>
                //     <img src={this.state.items[0].image}/><h3>{this.state.items[0].name}</h3><button>Register</button>
                // </div>
            )
        }
    }
};

export default Item;