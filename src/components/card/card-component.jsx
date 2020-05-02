import React from 'react';
import './card-styles.css'

const Card = (props) => (
    <div className="card-container">
        <a href="https://www.somesite.com"><img src={`https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?set=set5&size=180x180`} alt="Logo" /></a>
        <h2 > {props.data.name} </h2>
    </div>
);

export default Card;
