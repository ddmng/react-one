import React from 'react'

class Filter extends React.Component {

    render() {
        return (
            <div>
                Filter:
                <input type="text" onChange={this.props.handleFilterChange}></input>
            </div>
        )
    }

}

export default Filter;