import React, { Component } from "react";
import "./App.css";
import Pet from "./Pet";

class Results extends Component {

    render() {
        return (
            <div className="pets">
                {this.props.pets.filter(el => el.name.match(this.props.filter)).map(p => (
                    <div key={p.id}>
                        <Pet name={p.name}
                            id={p.id}
                            animal={p.animal}
                            media={p.media}
                            location={p.location}
                            breed={p.breed}
                        />
                        <button onClick={this.props.handleDeleteClick(p.id)}>x</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Results;
