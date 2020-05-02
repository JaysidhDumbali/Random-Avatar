import React from 'react';
import './refresh-button.styles.css';


const RefreshButton = ({action,faIcon}) =>(
    <button className="customButton" onClick={action} >
        <i className={faIcon}></i> 
    </button>

)

export default RefreshButton