import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Inputs from './Inputs';
import Grid from './Grid';

function initializeGridData(size) {
    console.log('initializeGridData, size = ', size);

    // initialize a 2-dimensional array
    let grid = new Array(size + 1);
    for (let i=0; i <= size + 1; i++) {
        grid[i] = new Array(size + 1);
    }

// the grid is going to go from 0 to gridsize+1.
// The 0 row and column and gridsize+1 row and column will have temperature 0, and never change.
    //console.log ('initializing grid data...');
    for (let i=0; i <= size + 1; i++) {
        for (let j=0; j <= size + 1; j++) {
            grid[i][j] = {};
            grid[i][j].temperature = 0;
            grid[i][j].lasttemp = 0;
            grid[i][j].selected = false;     // should start off
        }
    }
    return grid;
}

function heatInterval(size, grid, intervalSpeed) {
    console.log ('in heatInterval');
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            // First, increase temperature for all selected by 1 degree.
            if (grid[i][j].selected) {
                grid[i][j].temperature += this.state.heatIncrease;
            }
            // Then, save a copy of the temperatures so we can do averages based on them.
            grid[i][j].lasttemp = grid[i][j].temperature;
        }
    }

    // Now set new temperatures based on the average of your temperature and the cell on each side of you.
    // Note: cells on the edge and on the corners have invisible cells off the grid whose temp is always 0.
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            grid[i][j].temperature = (
                grid[i-1][j-1].lasttemp +
                grid[i-1][j].lasttemp +
                grid[i-1][j+1].lasttemp +
                grid[i][j-1].lasttemp +
                grid[i][j].lasttemp +
                grid[i][j+1].lasttemp +
                grid[i+1][j-1].lasttemp +
                grid[i+1][j].lasttemp +
                grid[i+1][j+1].lasttemp
            ) / 9;

            //let color = colorChooser(grid[i][j].temperature, maxHeat);
            //let textColor = colorChooserText(grid[i][j].temperature, maxHeat);
            //let cellID = 'r' + i + '-' + j;
            //console.log(cellID);
            //let cell = document.getElementById(cellID);
            //cell.style.backgroundColor = color;
            //cell.style.color = textColor;
        }
    }
}

class App extends Component {
    constructor(){
        super();

        this.state = {
            gridSize: 11,
            heatIncrease: 1,
            intervalSpeed: 5,
            maxHeat: 31
        };

        let cellArrays = [];
        cellArrays = initializeGridData(this.state.gridSize);
        this.state.cellArrays = cellArrays;

        this.sizeChecked = this.sizeChecked.bind(this);
        //this.setAllSelected = this.setAllSelected.bind(this);
        this.turnAllOn = this.turnAllOn.bind(this);
        this.turnAllOff = this.turnAllOff.bind(this);
        this.speedChanged = this.speedChanged.bind(this);

        //console.log('do we have state intervalSpeed?', this.state.intervalSpeed);

        // set the first setTimeout. Each subsequent one gets set in the updateGridHTML function.
//        window.setTimeout(function(){
//            heatInterval(this.state.gridSize, this.state.cellArrays, this.state.intervalSpeed);
//            //updateGridHTML(this.state.gridSize);
//        }, 1000 / this.state.intervalSpeed);
    }

    sizeChecked(size){
        console.log('in sizeChecked, size', size);
        console.log('before', this.state.gridSize);
        //this.state = {gridSize: size};
        //console.log('after', this.state.gridSize);

        let cellArrays = initializeGridData(size);

        this.setState({
            gridSize: size,
            cellArrays: cellArrays
        });
    }

    setAllSelected(boolean){
        console.log('in turnAllOn/Off');
        console.log(this.state.cellArrays);

        let size = this.state.gridSize;
        let grid = this.state.cellArrays;
        for (let i=1; i <= size; i++) {
            for (let j=0; j <= size + 1; j++) {
                grid[i][j].selected = boolean;
            }
        }

        this.setState({
            cellArrays: grid
        });
    }

    turnAllOff(){
        console.log('in turnAllOff');
        this.setAllSelected(false);
    }

    turnAllOn(){
        console.log('in turnAllOn');
        this.setAllSelected(true);
    }

    speedChanged(){
        console.log('in speedChanged');
        console.log(this.state.intervalSpeed);
        let intervalSpeed = document.getElementById('intervalSpeed').value;

        this.setState({
            intervalSpeed: intervalSpeed
        });
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <Inputs
                    sizeChecked={this.sizeChecked}
                    turnAllOn={this.turnAllOn}
                    turnAllOff={this.turnAllOff}
                    speedChanged={this.speedChanged}
                />
                <Grid gridSize={this.state.gridSize} cellArrays={this.state.cellArrays}  />

            </div>
        );
    }
}



export default App;
