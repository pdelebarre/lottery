import React, { useState } from 'react';
import classes from './Ticket.module.css';

const Ticket = (props) => {
    const [isWinner, setIsWinner] = useState(false);

    const {number,seller, buyer, winning} = {...props};

    return(
        <div className="ticket">
            <div className="ticket_number">{number}</div>
            <div className="ticket_seller">{seller}</div>
            <div className="ticket_buyer">{buyer}</div>
            <div className="ticket_winning">{winning}</div>
        </div>
    );
};

export default Ticket;