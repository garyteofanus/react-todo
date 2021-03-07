import './Title.css';

import React from "react";

function Title(props) {
    return (
        <div className="Title">
            <p>{props.text}</p>
        </div>
    )
}

export default Title;
