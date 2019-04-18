import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
    return (
        <div>
            {props.name}
            <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    )
}