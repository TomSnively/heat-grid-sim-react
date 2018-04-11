import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Inputs from './Inputs';
import Grid from './Grid';
import TotalHeat from './TotalHeat';

function initializeGridData(size) {
    //console.log('initializeGridData, size = ', size);

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

class App extends Component {
    constructor(){
        super();

        this.state = {
            gridSize: 11,
            heatIncrease: 1,
            intervalSpeed: 5,
            maxHeat: 31,
            timerRunning: false,
            setTimeoutId: null,
            totalHeat: 0
        };

        let cellArrays = [];
        cellArrays = initializeGridData(this.state.gridSize);
        this.state.cellArrays = cellArrays;

        this.sizeChecked = this.sizeChecked.bind(this);
        //this.setAllSelected = this.setAllSelected.bind(this);
        this.turnAllOn = this.turnAllOn.bind(this);
        this.turnAllOff = this.turnAllOff.bind(this);
        this.speedChanged = this.speedChanged.bind(this);
        this.heatInterval = this.heatInterval.bind(this);

        this.cellClicked = this.cellClicked.bind(this);
    }

    heatInterval(size, grid, intervalSpeed, heatIncrease) {
        // Set the time for the next update.
        let setTimeoutId = window.setTimeout(function(){
            //console.log('intervalSpeed', this.state.intervalSpeed);
            this.heatInterval(size, grid, intervalSpeed, heatIncrease);
        }.bind(this), 1000 / this.state.intervalSpeed);

        //console.log ('in heatInterval');
        for (let i = 1; i <= size; i++) {
            for (let j = 1; j <= size; j++) {
                // First, increase temperature for all selected by 1 degree.
                if (grid[i][j].selected) {
                    grid[i][j].temperature += heatIncrease;
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
            }
        }

        let totalHeat = 0;
        for (let i = 1; i <= size; i++) {
            for (let j = 1; j <= size; j++) {
                totalHeat += grid[i][j].temperature;
            }
        }

        this.setState({
            cellArrays: grid,
            setTimeoutId: setTimeoutId,
            totalHeat: Math.round(totalHeat*10)/10
        });

    }


    sizeChecked(size){
        //console.log('in sizeChecked, size', size);
        //console.log('before', this.state.gridSize);
        //this.state = {gridSize: size};
        //console.log('after', this.state.gridSize);

        let maxHeat;
        if(size === 17) {
            maxHeat = 70;
        } else if (size === 13) {
            maxHeat = 42.5;
        } else if (size === 11) {
            maxHeat = 31.0;
        } else if (size === 7) {
            maxHeat = 13.3;
        } else if (size === 5) {
            maxHeat = 7.1;
        } else if (size === 3) {
            maxHeat = 2.8;
        } else {
            console.log ('sizeChecked: invalid size');
        }

        let cellArrays = initializeGridData(size);

        if (this.state.timerRunning){
            console.log('turning off the timer');
            clearTimeout(this.state.setTimeoutId);
        }

        this.setState({
            gridSize: size,
            cellArrays: cellArrays,
            maxHeat: maxHeat,
            timerRunning: false,
            setTimeoutId: null
        });
    }

    setAllSelected(boolean){
        //console.log('in turnAllOn/Off');
        //console.log(this.state.cellArrays);

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

        if (!this.state.timerRunning){
            console.log('timer is not running, we are starting it now');
            this.heatInterval(this.state.gridSize, this.state.cellArrays, this.state.intervalSpeed, this.state.heatIncrease);
            this.setState({
                timerRunning: true
            });
        }
    }

    turnAllOff(){
        //console.log('in turnAllOff');
        this.setAllSelected(false);
    }

    turnAllOn(){
        //console.log('in turnAllOn');
        this.setAllSelected(true);
    }

    speedChanged(){
        //console.log('in speedChanged');
        console.log(this.state.intervalSpeed);
        let intervalSpeed = document.getElementById('intervalSpeed').value;

        this.setState({
            intervalSpeed: intervalSpeed
        });
    }

    cellClicked(row, cell){
        //console.log('cell clicked, row cell', row, cell);

        let grid = this.state.cellArrays;
        //console.log(grid[row][cell]);
        grid[row][cell].selected = !grid[row][cell].selected;
        this.setState({
            cellArrays: grid
        });

        if (!this.state.timerRunning){
            //console.log(this.state);
            console.log('timer is not running, we are starting it now');
            this.heatInterval(this.state.gridSize, this.state.cellArrays, this.state.intervalSpeed, this.state.heatIncrease);
            this.setState({
                timerRunning: true
            });

        }
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
                <Grid
                    gridSize={this.state.gridSize}
                    cellArrays={this.state.cellArrays}
                    maxHeat={this.state.maxHeat}
                    cellClicked={this.cellClicked}
                />
                <TotalHeat totalHeat={this.state.totalHeat} />
            </div>
        );
    }
}

export default App;
