import React, { Component } from 'react';
import Row from './Row';

class Grid extends Component {
    render() {
        let rows = [];
        for (let i=1; i<=this.props.gridSize; i++) {
            rows.push(<Row rowNumber={i} key={i} gridSize={this.props.gridSize} cellArrays={this.props.cellArrays} maxHeat={this.props.maxHeat}/>);
        }

        return (
            <div className="table-responsive">
                <div id="grid">
                    {rows}
                </div>
            </div>
        );
    }
}

export default Grid;
