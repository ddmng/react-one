import React from 'react';

class Add extends React.Component {

    render() {
        return (
            <div>
                <input type="text" onChange={this.props.updateName} value={this.props.name} />
                <button onClick={this.props.addPet}>Add a new pet!</button>
            </div>
        )
    }

}

export default Add;