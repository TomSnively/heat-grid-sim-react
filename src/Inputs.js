import React, { Component } from 'react';

class Inputs extends Component {
    constructor(props) {
        super(props);

        this.sizeChecked = this.sizeChecked.bind(this);
        this.turnAllOn = this.turnAllOn.bind(this);
        this.turnAllOff = this.turnAllOff.bind(this);
        this.speedChanged = this.speedChanged.bind(this);
    }

    sizeChecked(size){
        console.log('in sizeChecked, size', size);
    }

    turnAllOn(){
        console.log('in turnAllOn');
    }

    turnAllOff(){
        console.log('in turnAllOff');
    }

    speedChanged(){
        console.log('in speedChanged');
    }
    
    render() {
        return (
            <div className="panel panel-default">
                <p>Choose the grid size; resizing will start over.
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="3" onClick={this.sizeChecked(3)} /> 3x3
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="5" onClick={this.sizeChecked(5)} /> 5x5
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="7" onClick={this.sizeChecked(7)} /> 7x7
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="11" defaultChecked="checked" onClick={this.sizeChecked(11)} /> 11x11
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="13" onClick={this.sizeChecked(13)} /> 13x13
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="gridSize" value="17" onClick={this.sizeChecked(17)} /> 17x17
                    </label>
                </p>
                <p>Choose the heat interval speed. How many times does the screen update per second (1-20)?
                    <input type="number" id="intervalSpeed" min="1" max="20" defaultValue="5" onChange={this.speedChanged()} />
                </p>
                <p>
                    <input type="button" className="btn" value="Turn All On" onClick={this.turnAllOn()} />
                    <input type="button" className="btn" value="Turn All Off" onClick={this.turnAllOff()} />
                </p>
            </div>
        );
    }
}

export default Inputs;
