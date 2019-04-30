import React from 'react';
import './Comic.css';

export default (props) => {
    return (
        <div className="comic" id="comic">
            <img src={props.comic.img} className="image" alt="comic"/>
            <h4>{props.comic.safe_title}</h4>
            <button onClick = {()=>{props.isFunny(props.comic.num)}} className="funny-button">Funny</button>
            <button onClick = {()=>{props.isNotFunny(props.comics.num)}} className="funny-button">Not Funny</button>
        </div>
    )
}