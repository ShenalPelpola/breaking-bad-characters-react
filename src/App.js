import React, { Component } from "react";
import "./App.css";
import Header from "./Components/ui/Header";
import Search from "./Components/ui/Search";
import CharacterGrid from "./Components/Characters/CharacterGrid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    fetch(`https://www.breakingbadapi.com/api/characters`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          characters: data,
          isLoading: false,
        });
      })
      .catch((error) =>
        console.log(`Error when fetching and passing data ${error}`)
      );
  };

  getSearchedCharacters = (q) => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${q}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          characters: data,
          isLoading: false,
        });
      })
      .catch((error) =>
        console.log(`Error when fetching and passing data ${error}`)
      );
  };

  render() {
    return (
      <div className="App container">
        <Header></Header>
        <Search getCharacter={this.getSearchedCharacters}></Search>
        <CharacterGrid
          isLoading={this.state.isLoading}
          characters={this.state.characters}
        ></CharacterGrid>
      </div>
    );
  }
}

export default App;
