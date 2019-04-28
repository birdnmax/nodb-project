import React, {Component} from 'react';
import './Comic.css';

export default (props) => {
    return (
        <div className="comic" id="comic">
            <div className="image">{'img'}</div>
            <h4>{'props.safe_title'}</h4>
            <button onClick = {()=>{props.isFunny(props.comics.num)}}>Funny</button>
            <button onClick = {()=>{props.isNotFunny(props.comics.num)}}>Not Funny</button>
        </div>
    )
}