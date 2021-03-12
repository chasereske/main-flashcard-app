import React from 'react'; 
import './flashcard.css';

function Flashcard(props){
    return (
        <div className="book">
            <div className="cover">
                <h1 className="title">{props.flashcard}</h1>
            </div>
        </div>
    ); 
}

export default Flashcard;