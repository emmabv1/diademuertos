import React, {Component} from "react";
import axios from "axios";
import Item from "./Item"
import items from "../items.json";
import Modal from "./Modal";

class Home extends Component {
    state = {
        items
    }

    // authCheck = (req, res, next) => {
    //         if (!req.user) {
    //             console.log('nope')
    //             //res.redirect("/auth/login")
    //         }
    //         else {
    //             console.log(req.user)
    //             //next();
    //         }
    // }

    // componentDidMount() {
    //     console.log('mounted');
    //     axios.get('/auth/google/redirect')
    //     .catch(err => console.log(err))
    //     .then(res => console.log(res))
    //     //this.authCheck();
    // }


    // axios.get(`/api/users/${this.userqueryid}`)
    //       .then(res => this.setState ({user: res.data}))
    //       .then(() => console.log(this.state.user));
    //router.get('/auth/google/redirect'
        //req.user

    render() {
        return (
            <div  className="container">
                <h2 className="title">Altar Planner</h2>

                <Modal/>

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