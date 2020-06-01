import React, { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.jsx";
import { CardList } from "./components/card-list/card-list.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(result => this.setState({ monsters: result }));
  }

  handleOnChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleOnChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
