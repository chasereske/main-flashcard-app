import React, { Component } from 'react';

class FlashcardCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            author: ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={/*Call a function to handle form submission*/}>
                    <div className="row col-align"> 
                        <div className="col-md-4">
                            <label>Title:</label>
                            <input type="text" name="title" value={this.state.title} 
                            onChange={/*Call a function to handle title input change*/} />
                        </div>
                        <div className="col-md-4">
                            <label>Author:</label>
                            <input type="text" name="author" value={this.state.author} 
                            onChange={/*Call a function to handle author input change*/} />
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