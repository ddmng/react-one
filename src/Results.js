import React, { Component } from "react";
import "./App.css";
import Pet from "./Pet";

class Results extends Component {
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
            <div className="pets">
                {this.state.list.map(p => (
                    <Pet name={p.name}
                        key={p.id}
                        id={p.id}
                        animal={p.animal}
                        media={p.media}
                        location={p.location}
                        breed={p.breed} />
                ))}
            </div>
        );
    }
}

export default Results;
