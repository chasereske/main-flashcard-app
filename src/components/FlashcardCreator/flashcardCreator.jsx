import React, { Component } from 'react';

class FlashcardCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            category: '',
            cardNumber: '',
            question: '',
            answer: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value 
        });
    }

    handleSubmit(event) {
        event.preventDefault(); 
        const flashcard = {
            category: this.state.category,
            cardNumber: this.state.cardNumber,
            question: this.state.question,
            answer: this.state.answer
        }
        this.props.addNewFlashcard(flashcard);
        this.setState({
            category: '',
            cardNumber: '',
            question: '',
            answer: ''
        });
    }

    render() {
        return (
            <div>
                <hr />
                <center>
                    <h3>Add a new flashcard!</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align"> 
                        <div className="col-md-4">
                            <label>Category:</label>
                            <input type="text" name="category" value={this.state.category} 
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Card Number:</label>
                            <input type="text" name="cardNumber" value={this.state.cardNumber} 
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Question:</label>
                            <input type="text" name="author" value={this.state.question} 
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Answer:</label>
                            <input type="text" name="answer" value={this.state.answer} 
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Add" /> 
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FlashcardCreator; 