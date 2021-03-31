import React from 'react'

export default function Search(props){
    return(
        <div className="search">
            <h2>Search</h2>
            <input type="text" className="search-food" onChange={props.search}/>
        </div>
    )
}