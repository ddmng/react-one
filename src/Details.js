import React from 'react';

class Details extends React.Component {

    render() {
        const pet = this.props.pets.filter(p => `${p.id}` === this.props.id)[0]

        return <div>
            <h1>This is {pet.name}</h1>
            <h4>id {this.props.id}</h4>
            </div>

    }

}

export default Details