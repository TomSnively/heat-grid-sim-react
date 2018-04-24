import React, { Component } from 'react';
import Row from './Row';

class Grid extends Component {
    render() {
        let rows = [];
        for (let i=1; i<=this.props.gridSize; i++) {
            rows.push(<Row rowNumber={i}
                           key={i}
                           gridSize={this.props.gridSize}
                           cellArrays={this.props.cellArrays}
                           maxHeat={this.props.maxHeat}
                           cellClicked={this.props.cellClicked}
            />);
        }

        let divStyle = {
            width: this.props.gridSize * 30,
            height: this.props.gridSize * 30
        };
        return (
            <div className="table-responsive">
                <div id="grid" style={divStyle}>
                    {rows}
                </div>
            </div>
        );
    }
}

export default Grid;
