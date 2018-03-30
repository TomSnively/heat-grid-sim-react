import React, { Component } from 'react';

class Cell extends Component {

    getBackgroundColor(heat, maxHeat){
        heat += 1/800;
        let group = Math.floor((heat / maxHeat) * 12);
        //console.log('temp, maxHeat', heat, maxHeat);
        return `heatColor${group}`;
    }

    render() {
        let borderColor;
        if (this.props.selected) {
            borderColor = "redBorder";
        } else {
            borderColor = "blackBorder";
        }

        let backgroundColor = this.getBackgroundColor(this.props.temperature, this.props.maxHeat);

        const classes = `cell ${borderColor} ${backgroundColor}`;

        return (
            <div className={classes}>
                {Math.round(this.props.temperature*10)/10}
            </div>
        );
    }
}

export default Cell;

