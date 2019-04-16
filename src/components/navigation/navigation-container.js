import React from 'react';
import {NavLink} from 'react-router-dom';

class NavigationContainer extends React.Component {
    constructor() {
    super()

    }

    render() {
        return (
            <div>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about-me">About Me</NavLink>
                    
                <button>About</button>
                <button>Blog</button>
                {true ? <button>Add Blog</button> : null}
            </div>
        )
    }
}

export default NavigationContainer