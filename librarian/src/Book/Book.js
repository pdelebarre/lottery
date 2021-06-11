import React from 'react';
import './Book.css';

const book = (props) => {

    return(
        <div className = 'book'>
            {props.title} written by {props.author}
            <div className="edit">
                <button onClick={props.edit}>edit</button>
            </div>
            <div className="bookEdit">
                <input type="text" value={props.title}/>
                <button onClick={props.changed}>OK</button>
            </div>
        </div>
    )
}

export default book;