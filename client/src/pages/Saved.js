import React, { Component } from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import SavedItem from "../components/SavedItem"

class Saved extends Component {
  state = {
    saved: []
  }
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => {
    API.getBooks().then(res => {
      this.setState({ saved: res.data })
      console.log(this.state.saved);
    }).catch(err => console.log(err))
  };
  delete = (id) => {
    API.deleteBook(id)
      .then(res => {
        this.loadBooks();
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Jumbotron />
          {this.state.saved.map(book => {
            return (
              <div>
                <SavedItem
                  imageLinks={book.thumbnail ? book.thumbnail : "http://placekitten.com/200/300"}
                  title={book.title}
                  authors={book.authors}
                  description={book.synopsis}
                  id={book._id}
                  onClick={this.delete}
                />
              </div>
            )
          })}

        </Container>

      </div>
    )
  }
}

export default Saved;
