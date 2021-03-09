import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import FlashcardViewer from './FlashcardViewer/flashcardViewer';
import FlashcardCreator from './FlashcardCreator/flashcardCreator';

class App extends Component { 
    constructor(props) {
        super(props);
        this.flashcards = [
            {title: 'Ready Player One', author: 'Ernest Cline'},
            {title: 'All the Light We Cannot See', author: 'Anthony Doerr'}, 
            {title: 'The First and Last Freedom', author: 'Jiddu Krishnamurti'},
        ];
        this.state = {
          flashcardNumber: 0
         }
    }
    
    goToNextFlashcard(){
        let tempFlashcardNumber = this.state.flashcardNumber; tempFlashcardNumber++;
        if(tempFlashcardNumber === this.flashcards.length){
            tempFlashcardNumber = 0;
        }
        this.setState({
            flashcardNumber: tempFlashcardNumber
        }); 
    }

    goToPreviousFlashcard(){
        let tempFlashcardNumber = this.state.flashcardNumber; tempFlashcardNumber--;
        if(tempFlashcardNumber < 0)
            tempFlashcardNumber = this.flashcards.length - 1; 
        this.setState({
            flashcardNumber: tempFlashcardNumber
        }); 
    }
   
    render() {
        return (
            <div className = "container-fluid">
                <TitleBar />
                <FlashcardViewer flashcard={this.flashcards[this.state.flashcardNumber]} nextFlashcard={() => this.goToNextFlashcard()} previousFlashcard={() => this.goToPreviousFlashcard()}/>
                <FlashcardCreator />
            </div>
        );
    } 
}

export default App;