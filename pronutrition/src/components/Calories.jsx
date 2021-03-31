import React from  'react'

export default function Calories(props){
    return(
        <div className="cal-count">
            <p>{props.count}{props.name} = {props.calories}</p>
            <button className="remove" name={props.name} onClick={(e) => props.delete(e)}>X</button>
        </div>
    )  
}