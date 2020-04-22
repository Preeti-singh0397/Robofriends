import React from "react";
import './Card.css';

const Card = ({name,id,email}) => 

{
    
    return(
        <div className=" tc bg-light-green dib br3 mb2 pa3 mr2 grow bw2 shadow-5">
            <img alt='Photo' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;
