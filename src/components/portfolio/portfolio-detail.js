import React from 'react';

export default (props) => {
    return (
        <div>
            <h2>Portfolio Detial</h2>
            <h2>{props.match.params.slug}</h2>
        </div>
    )
}