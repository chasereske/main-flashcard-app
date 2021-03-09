import React from 'react'; 
import './flashcard.css';

function Flashcard(props){
    return (
        <div className="book">
            <div className="cover">
                <h1 className="title">{props.flashcard.title}</h1>
                <h4 className="author">{props.flashcard.author}</h4>
            </div>
        </div>
    ); 
}

export default Flashcard;