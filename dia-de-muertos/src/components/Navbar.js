import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import {Route, Link} from 'react-router-dom';

class Navbar extends Component {

    render() {
        return(
            <div className="navbar">
                <section>
                <span>Welcome {/*username*/}</span>
                <Link to="/"><span>Home</span></Link>
                <Link to="/signup"><span>Sign Up</span></Link>
                <Link to="/login"><span>Log In</span></Link>
                <Link to="/shoplist"><span>Shopping List</span></Link>
                </section>
                
            </div>
        )
    }

};

export default Navbar;