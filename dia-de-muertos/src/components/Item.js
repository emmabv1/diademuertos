import React, {Component} from "react";
import Register from "./Register";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";

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
    }

    render() {
        console.log (this.props.bringing);
        if (this.props.bringing == 2) {
            return (
                <div>
                <Grid columns={3} gap="2px">
                    <Cell><img onClick={this.toggleModal} src={this.props.image} className="image"/></Cell>
                    <Cell><h3>{this.props.name}</h3></Cell>
                    <Cell>
                        <Register
                            num = {0}
                            itemname = {this.props.name}
                            bringing = {this.props.bringing}
                        />
                        <Register
                            num = {1}
                            itemname = {this.props.name}
                            bringing = {this.props.bringing}
                        />
                    </Cell>
                    <Cell style={this.state.modal} width={3}><p>{this.props.description}</p></Cell>
                </Grid>
                </div>
            )
        }

        else return (
            <div>
            <Grid columns={3} gap="2px">
                <Cell><img onClick={this.toggleModal} src={this.props.image} className="image"/></Cell>
                <Cell><h3>{this.props.name}</h3></Cell>
                <Cell>
                    <Register
                        num = {0}
                        itemname = {this.props.name}
                        bringing = {this.props.bringing}
                    />
                </Cell>
                <Cell style={this.state.modal} width={3}><p>{this.props.description}</p></Cell>
            </Grid>
            </div>
            )
    }
};

export default Item;