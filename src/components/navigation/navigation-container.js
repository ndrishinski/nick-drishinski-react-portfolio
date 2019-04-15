import React from 'react';

class NavigationContainer extends React.Component {
    constructor() {
    super()

    }

    render() {
        return (
            <div>
                <button>Home</button>
                <button>Contact</button>
                <button>About</button>
                <button>Blog</button>
                {true ? <button>Add Blog</button> : null}
            </div>
        )
    }
}

export default NavigationContainer