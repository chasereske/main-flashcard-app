import React from 'react';

function BookViewer(props){ 
    return(
        <div className="row row-spacer"> 
            <div className="col">
                <button onClick={() => this.goToPreviousBook()}>Previous Book</button> 
            </div>
            <div className="col">
                <h1>{this.books[this.state.bookNumber].title}</h1>
                <h4>{this.books[this.state.bookNumber].author}</h4>
            </div>
            <div className="col-md-4">
                <button onClick={() => this.goToNextBook()}>Next Book</button>
            </div>
        </div>
    )
}

export default BookViewer;