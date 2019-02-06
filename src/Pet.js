import React from "react";
import {Link} from "@reach/router"

class Pet extends React.Component {

  render() {
    const { id, name, animal, breed, media, location } = this.props;

    return (
      <Link to={`/details/${id}`} className="pet">
        <h1>Nome: {name}</h1>
        <h2> -  {animal}</h2>
        <h2> -  {breed}</h2>
        <h2> -  {media}</h2>
        <h3> -  {location}</h3>
      </Link>
    )
  }
}

export default Pet;
