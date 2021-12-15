import React, { useState } from "react";
import ico from "../images/search.png"

const Search = () => {
    const handleClick= () => {
        const {callback} = this.props;
        callback(document.getElementById('searchBar').value);
    }

    return (
        <div>
            <input id= "searchBar" type= "text" placeholder= "Autor"></input> 
            <img type= "submit" src= {ico} className= "searchButton" alt= "logo" onClick= {handleClick}/>
        </div>
    )
}

export default Search;