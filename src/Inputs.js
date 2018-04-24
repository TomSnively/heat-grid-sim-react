import React, { Component } from 'react';

class Inputs extends Component {


    render() {
        return (
            <div className="panel panel-default">
                <p>Choose your preferred grid size. (Resizing the grid will restart the simulator.)&nbsp;
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="3" onClick={() => {this.props.sizeChecked(3)}} /> 3x3&nbsp;
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="5" onClick={() => {this.props.sizeChecked(5)}} /> 5x5&nbsp;
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="7" onClick={() => {this.props.sizeChecked(7)}} /> 7x7&nbsp;
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="11" defaultChecked="checked" onClick={() => {this.props.sizeChecked(11)}} /> 11x11&nbsp;
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="13" onClick={() => {this.props.sizeChecked(13)}} /> 13x13&nbsp;
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="17" onClick={() => {this.props.sizeChecked(17)}} /> 17x17
                    </label>
                </p>
                <p>Choose the heat interval speed. How many times does the screen update per second?&nbsp;
                    <input type="number" id="intervalSpeed" min="1" max="200" defaultValue="5" onChange={() => {this.props.speedChanged()}} />
                </p>
                <p>
                    <input type="button" className="btn" value="Turn All On" onClick={() => {this.props.turnAllOn()}} />&nbsp;
                    <input type="button" className="btn" value="Turn All Off" onClick={() => {this.props.turnAllOff()}} />
                </p>
            </div>
        );
    }
}

export default Inputs;
