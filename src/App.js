import React, { Component } from "react";
import "./App.css";
import Results from "./Results";
import { Router } from "@reach/router"
import Details from "./Details";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.updateName} value={this.state.name} />
        <button onClick={this.addPet}>Add a new pet!</button>

        <Router>
          <Results path="/"/>
          <Details path="/details/:id"/>
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
