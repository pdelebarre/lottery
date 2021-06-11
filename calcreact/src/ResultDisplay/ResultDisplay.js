import React from 'react';
import './ResultDisplay.css';

const resultDisplay = (props) => {
    let result = props.result;
    return(
        <div className="result">
            <p>{result}</p>
        </div>
    )
}

export default resultDisplay;