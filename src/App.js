import React, { Component } from "react";
import "./App.css";
import Results from "./Results";
import { Router, Link } from "@reach/router"
import Details from "./Details";
import Filter from "./Filter";
import Add from "./Add";


const initialState = {
  name: "",
  filter: "",
  list: [{
    name: "fuffi",
    id: 1,
    media: 'media',
    location: 'Italy',
    breed: 'doberman',
    animal: 'dog'
  }, {
    name: "lillo",
    id: 2,
    media: 'media',
    location: 'Italy',
    breed: 'siamese',
    animal: 'cat'
  }]
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState
  }

  addPet = () => {
    console.log("addPet");
    this.setState({
      name: "",
      list: [
        ...this.state.list,
        {
          name: this.state.name,
          id: this.state.name
        }
      ]
    });
  };

  updateName = event => {
    console.log("updateName");
    this.setState({
      name: event.target.value
    });
  };

  deleteClick = (id) => () => {
    console.log('Delete: ', id)
    this.setState({
      list: this.state.list.filter(el => el.id !== id)
    })
  }

  handleFilterChange = (event) => {
    console.log('Filter changed', event.target.value)
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Link to="/">
          <h1>Adopt me!</h1>
        </Link>

        <Add updateName={this.updateName} addPet={this.addPet} name={this.state.name} />

        <Filter handleFilterChange={this.handleFilterChange} />

        <Router>
          <Results path="/"
            pets={this.state.list}
            deleteClick={this.deleteClick}
            filter={this.state.filter}
          />
          <Details path="/details/:id" />
        </Router>

        <div>
          <pre>
            <code>{JSON.stringify(this.state, null, 4)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;
