
import React from 'react';
import './card-list.styles.css';
import Card from '../card/card-component.jsx';


const CardList = (props) => { 
    /*props passed from app.js is added here and we are looping through each of that props hash*/
    return (
    <div className='card-list'>
        {
          props.data.map(data=> (
            <Card key={data.id} data={data}></Card>
          ))
        }
    </div>
    )
};

export default CardList;