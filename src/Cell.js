import React, { Component } from 'react';

class Cell extends Component {

    getBackgroundColor(heat, maxHeat){
        heat -= 1/100;
        let group = Math.floor((heat / maxHeat) * 12) + 1;
        //console.log('temp, maxHeat', heat, maxHeat);
        return `heatColor${group}`;
    }

    getForegroundColor(heat, maxHeat){
        let group = Math.floor((heat / maxHeat) * 2);
        //console.log('temp, maxHeat', heat, maxHeat);
        return `textColor${group}`;
    }

    render() {
        let borderColor;
        if (this.props.selected) {
            borderColor = "redBorder";
        } else {
            borderColor = "blackBorder";
        }

        let backgroundColor = this.getBackgroundColor(this.props.temperature, this.props.maxHeat);
        let color = this.getForegroundColor(this.props.temperature, this.props.maxHeat);

        const classes = `cell ${borderColor} ${backgroundColor} ${color}`;

        return (
            <div className={classes}>
                {Math.round(this.props.temperature*10)/10}
            </div>
        );
    }
}

export default Cell;

