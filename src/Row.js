import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {
/*
    constructor(){
        super();
    }
*/
    render() {
        //console.log('Row render gridSize', this.props.gridSize);
        let cells = [];
        for (let i=1; i<=this.props.gridSize; i++) {
            //console.log('row render, this.props =  ', this.props);

            const cellTemperature =  this.props.cellArrays[this.props.rowNumber][i].temperature;
            const cellSelected =  this.props.cellArrays[this.props.rowNumber][i].selected;

            //console.log(cellTemperature);
            cells.push(<Cell
                key={i}
                temperature={cellTemperature}
                selected={cellSelected}
                maxHeat={this.props.maxHeat}
                rowNumber={this.props.rowNumber}
                cellNumber={i}
                cellClicked={this.props.cellClicked}
            />);
        }
            // rowNumber={this.props.rowNumber}

        return (
            <div className="row">
                {cells}
            </div>
        );
    }
}

export default Row;

