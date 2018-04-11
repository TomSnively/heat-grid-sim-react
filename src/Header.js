import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="page-info">
                <h1>Heat Grid Simulator</h1>
                <h2>React</h2>

                <h3>Overview</h3>
                <p>Heat Grid Simulator is a coding challange to learn front end frameworks. This was developed first in <a href="../heat-grid-js/">vanilla JavaScript</a>,
                    and next using React. In the near future I will have a version in Angular.</p>
                <p>The <strong>Heat Grid</strong> has a square of cells that each has its own temperature.
                    Cells that are selected get hotter by having heat added to them so that their temperature would increase by 1 degree each heat interval.
                    Additionally, each heat interval, heat is transferred from hot cells to each neighboring cell, spreading out.
                    For example, if all cells are at 0 degrees, and you turn on a center cell, at the first heat interval,
                    the 1 degree of heat would be spread equally to the turned on cell and the eight neighboring cells.
                    Each of the cells would have 1/9 of a degree (0.111).
                </p>
                <p>Note that heat dissipates and is lost on the edges of the grid.</p>
                <p>As the heat for a cell increases, the background color changes. I've mimicked the <a href="http://www.blksmth.com/heat_colors.htm">heat colors</a> when mild steel is heated.
                </p>
                <h3>Using Heat Grid Simulator</h3>
                <p>Click/tap on a cell (a square in the grid below) to select it and add heat to that cell.
                    (Selected cells have red borders.) You can heat as many or as few of the cells as you like.</p>
                <p>The "Turn All On" and "Turn All Off" buttons are quick and easy ways to see the Heat Grid Simulator in action.</p>
            </div>
        );
    }
}

export default Header;

