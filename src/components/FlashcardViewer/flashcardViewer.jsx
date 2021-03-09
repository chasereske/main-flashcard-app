import React from 'react';
import Flashcard from '../Flashcard/flashcard';

function FlashcardViewer(props){ 
    return(
        <div className="row row-spacer"> 
            <div className="col">
                <button onClick={() => props.previousFlashcard()}>Previous Flashcard</button> 
            </div>
            <div className="col">
                <Flashcard flashcard={props.flashcard}/>
            </div>
            <div className="col-md-4">
                <button onClick={() => props.nextFlashcard()}>Next Flashcard</button>
            </div>
        </div>
    )
}

export default FlashcardViewer;