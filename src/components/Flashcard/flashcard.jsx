import React from 'react'; 
import './flashcard.css';

function Flashcard(props){
    return (
        <div className="book">
            <div className="cover">
                <h1 className="title">{props.flashcard.category}</h1>
                <h4 className="author">{props.flashcard.cardnumber}</h4>
                <h4 className="author">{props.flashcard.question}</h4>
                <h4 className="author">{props.flashcard.answer}</h4>
            </div>
        </div>
    ); 
}

export default Flashcard;