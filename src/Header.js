import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="page-header">
                <h1>Heat Grid Simulator</h1>
                <p>Click/tap on a cell (a square in the grid below) to select it and add heat to that cell. (Selected cells have a red borders.) You can heat as many or as few of the cells as you like.</p>
                <p>Each heat interval, after the heat is added, the heat spreads from each cell to its neighbor cells. Heat will be lost off the grid on all sides.</p>
            </div>
        );
    }
}

export default Header;

