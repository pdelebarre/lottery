import './App.css';
import Book from './Book/Book.js';
import { Component } from 'react';

class App extends Component {
  state = {
    books: [{
        id: "1",
        title: "Harry Potter",
        author: "JK Rolling"
    },
    {
      id: "2",
      title: "Germinal",
      author: "Emile Zola"
    }],
    
  };

  toggleEditBook = (bookIdx) => {
    this
  }

  render(){
    let books = (
      <div>
        {this.state.books.map((book, idx) => {
            return (<Book
              title={book.title}
              author={book.author}
              key = {book.id}
              edit = {(event) => this.toggleEditBook(event)}/>)
        })}
      </div>
    );

    return (
      <div>
        {books}
      </div>
      
    );
  }
}

export default App;
