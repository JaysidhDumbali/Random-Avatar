import React from 'react';
import './card-styles.css'

const Card = (props) => (
    <div className="card-container">
        <img alt="avatar" src={`https:/robohash.org/${Math.floor((Math.random() * 10) + 1)}?set=set5&size=180x180`}/>
        <h2 > {props.data.name} </h2>
    </div>
);

export default Card;