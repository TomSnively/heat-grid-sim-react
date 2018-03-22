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
        for (let i=0; i<this.props.gridSize; i++) {
            //console.log('rowNumber is ', this.props.rowNumber);
            //console.log('cellArrays = ', this.props.cellArrays);
            //1console.log('single cellArray =', this.props.cellArrays[this.props.rowNumber][i].temperature);

            const cellTemperature =  this.props.cellArrays[this.props.rowNumber][i].temperature;
            //console.log(cellTemperature);
            cells.push(<Cell key={i} temperature={cellTemperature}  />);
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

