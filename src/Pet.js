import React from "react";
import { Link } from "@reach/router"

class Pet extends React.Component {

  render() {
    const { id, name, animal, breed, media, location } = this.props;

    return (
      <div className="pet">
        <Link to={`/details/${id}`} >
          <h1>Nome: {name}</h1>
        </Link>
        <h4> -  {animal}</h4>
        <h4> -  {breed}</h4>
        <h4> -  {media}</h4>
        <h4> -  {location}</h4>
      </div>
    )
  }
}

export default Pet;
