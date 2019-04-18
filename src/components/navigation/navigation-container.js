import React from 'react';
import {NavLink} from 'react-router-dom';

class NavigationContainer extends React.Component {
    constructor() {
    super()

    }

    render() {
        return (
            <div>
                <NavLink activeClassName='nav-link-active' exact to="/">Home</NavLink>
                <NavLink activeClassName='nav-link-active' to="/about-me">About Me</NavLink>
                <NavLink activeClassName='nav-link-active' to="/contact">Contact</NavLink>
                <NavLink activeClassName='nav-link-active' to="/blog">Blog</NavLink>
                
                {false ? <button>Add Blog</button> : null}
            </div>
        )
    }
}

export default NavigationContainer