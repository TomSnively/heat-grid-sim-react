import React, { Component } from 'react';

class TotalHeat extends Component {

    render() {
        return (
            <div className="totalHeat">
                Total Heat: {this.props.totalHeat}
            </div>
        );
    }
}

export default TotalHeat;

