import React, { Component } from 'react';

class TotalHeat extends Component {

    render() {
        return (
            <div className="totalHeat">
                Total Heat: {this.props.totalHeat.toLocaleString(undefined,
                {'minimumFractionDigits':1,'maximumFractionDigits':1})}
            </div>
        );
    }
}

export default TotalHeat;

