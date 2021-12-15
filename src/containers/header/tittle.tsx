import React from 'react'

const Header = (prop : {tittle : string}) => {
    return (
        <div className= "header">
            <h1>{prop.tittle}</h1>
        </div>
    );
}

export default Header;