import React, { Component } from "react";
import "./App.css";
import Results from "./Results";
import { Router, Link } from "@reach/router"
import Details from "./Details";
import Filter from "./Filter";
import Add from "./Add";
import { connect } from 'react-redux'
import {updateName} from './actions';  

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

  handleAddClick = () => {
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

  handleNameChange = event => {
    console.log("updateName");
    this.setState({
      name: event.target.value
    });
  };

  handleDeleteClick = (id) => () => {
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

        <Add handleNameChange={this.props.updateName} 
             handleAddClick={this.handleAddClick} 
             name={this.props.state.name} />

        <Filter handleFilterChange={this.handleFilterChange} />

        <Router>
          <Results path="/"
            pets={this.props.state.list}
            handleDeleteClick={this.handleDeleteClick}
            filter={this.props.state.filter}
          />
          <Details path="/details/:id" pets={this.props.state.list} />
        </Router>

        <div>
          <pre>
            <code>{JSON.stringify(this.props.state, null, 4)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name => dispatch(updateName(name)),
  }
}

const StateApp = connect(
  mapStateToProps, 
  mapDispatchToProps)(App)

export default StateApp;
