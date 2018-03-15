import React, { Component } from 'react';

class Inputs extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <p>Choose the grid size; resizing will start over.
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="3" onclick="sizeChecked(3)" /> 3x3
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="5" onclick="sizeChecked(5)" /> 5x5
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="7" onclick="sizeChecked(7)" /> 7x7
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="11" checked="checked" onclick="sizeChecked(11)" /> 11x11
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="13" onclick="sizeChecked(13)" /> 13x13
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="17" onclick="sizeChecked(17)" /> 17x17
                    </label>
                </p>
                <p>Choose the heat interval speed. How many times does the screen update per second (1-20)?
                    <input type="number" id="intervalSpeed" min="1" max="20" value="5" onchange="speedChanged()" />
                </p>
                <p>
                    <input type="button" className="btn" value="Turn All On" onclick="turnAllOn()" />
                    <input type="button" className="btn" value="Turn All Off" onclick="turnAllOff()" />
                </p>
            </div>
        );
    }
}

export default Inputs;
