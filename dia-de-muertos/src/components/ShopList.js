import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import items from "../items.json";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ShopList extends Component {
    state = {
        list: items
    }

    checkAdmin = () => {
        console.log(this.props.users.name)
        if (this.props.users.name === "Alicia Vilar" || this.props.users.name === "Alicia Vilar Segura" || this.props.users.name === "Emma Becerril Vilar") {
            console.log("admin")
            this.setState({list: items.filter(item => item.bringing === "Alicia Vilar Events")})
        }
        else {
            console.log("nadmin")
            this.setState({list: items.filter(item => item.bringing === "Everyone")})
        }
    }

    componentWillMount() {
        this.checkAdmin();
    }

    render() {
        console.log(this.props.users.items)
        if (this.props.redirect === true) {
            return <Redirect to={"/login"}/>
        }

        if (this.props.users.items) {
            return(
                <div className="shoplist">
                    <h3>Your Shopping List</h3>
                    <ul>
                        {this.state.list.map(i => 
                            <li>{i.name}</li>    
                        )}
                        <li>{this.props.users.items}</li>
                    </ul>
                </div>
            )
        }

        else {
            return (
                <div className="shoplist">
                    <h3>Your Shopping List</h3>
                    <ul>
                        {this.state.list.map(i => 
                            <li>{i.name}</li>    
                        )}
                    </ul>
                </div>
            )
        }
    }
};

ShopList.propTypes = {
    users: PropTypes.object,
    redirect: PropTypes.bool
};

const mapStateToProps = state => ({
    users: state.users.items,
    redirect: state.authState.redirect
});

export default connect(mapStateToProps)(ShopList);