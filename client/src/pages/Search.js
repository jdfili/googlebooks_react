import React, { Component } from "react";
import Container from "../components/Container";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import BookItem from "../components/BookItem";
import API from "../utils/API";


class Search extends Component {
  state = {
    results: [],
    search: ""
  }

  search = query => {
    API.search(query)
      .then(res =>
        this.setState({ results: res.data.items })
      )
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  save = (id) => {
    const post = this.state.results.filter(result => result.id === id)
    API.saveBook({
      title: post[0].volumeInfo.title,
      authors: post[0].volumeInfo.authors,
      synopsis: post[0].volumeInfo.description,
      thumbnail: post[0].volumeInfo.imageLinks.thumbnail
    }).then(res =>
      alert("Saved to your library!")
      )
      .catch(err => console.log(err))
    // API.saveBook(data)
  }

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.search(this.state.search);
  };

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Jumbotron />
          <Form
            onClick={this.handleFormSubmit}
            onChange={this.handleInputChange}
            value={this.state.search}
            name="search"
          />
        </Container>
        {this.state.results.map(res => {
          return (
            <div>
              <BookItem
                id={res.id}
                imageLinks={res.volumeInfo.imageLinks ? res.volumeInfo.imageLinks.thumbnail : "http://placekitten.com/200/300"}
                title={res.volumeInfo.title ? res.volumeInfo.title : "No title to display"}
                authors={res.volumeInfo.authors ? res.volumeInfo.authors : "No authors"}
                categories={res.volumeInfo.categories ? res.volumeInfo.categories : "No info"}
                description={res.volumeInfo.description ? res.volumeInfo.description : 'No info'}
                onClick={this.save}
              />
            </div>
          )
        })}

      </div>
    )
  }
}

export default Search;
