import React, { Component } from "react";
import "./App.css";
import Pet from "./Pet";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      list: [{ name: "fuffi", id: 1 }, { name: "lillo", id: 2 }]
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
        {this.state.list.map(p => (
          <Pet name={p.name} key={p.id} />
        ))}
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
