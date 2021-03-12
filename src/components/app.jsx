import React, { Component } from 'react';
import axios from 'axios';
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
          flashcardNumber: 0,
          flashcard: []
         }
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/api/collections/60416e2759021da547bf82c5/flashcards').then(response=> {
        console.log(response);
        this.setState({flashcard: response.data});
    });    
}
    
    addNewFlashcard(flashcard){ 
        this.state.flashcard.push(flashcard); 
        this.setState({
            flashcardNumber: this.state.flashcard.length - 1 });
        }


    goToNextFlashcard(){
        let tempFlashcardNumber = this.state.flashcardNumber; tempFlashcardNumber++;
        if(tempFlashcardNumber === this.state.flashcard.length){
            tempFlashcardNumber = 0;
        }
        this.setState({
            flashcardNumber: tempFlashcardNumber
        }); 
    }

    goToPreviousFlashcard(){
        let tempFlashcardNumber = this.state.flashcardNumber; tempFlashcardNumber--;
        if(tempFlashcardNumber < 0)
            tempFlashcardNumber = this.state.flashcard.length - 1; 
        this.setState({
            flashcardNumber: tempFlashcardNumber
        }); 
    }
   
    render() {
        return (
            <div className = "container-fluid">
                <TitleBar />
                <FlashcardViewer flashcard={this.state.flashcard[this.state.flashcardNumber]} nextFlashcard={() => this.goToNextFlashcard()} previousFlashcard={() => this.goToPreviousFlashcard()}/>
                <FlashcardCreator addNewFlashcard = {this.addNewFlashcard.bind(this)}/>
            </div>
        );
    } 
}

export default App;