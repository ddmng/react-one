import React from 'react';

class Add extends React.Component {

    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handleNameChange} value={this.props.name} />
                <button onClick={this.props.handleAddClick}>Add a new pet!</button>
            </div>
        )
    }

}

export default Add;