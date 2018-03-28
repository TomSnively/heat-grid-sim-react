import React, { Component } from 'react';

class Cell extends Component {

    render() {
        let borderColor;
        if (this.props.selected) {
            borderColor = "redBorder";
        } else {
            borderColor = "blackBorder";
        }

        const classes = `cell ${borderColor}`;

        return (
            <div className={classes}>
                {Math.round(this.props.temperature*10)/10}
            </div>
        );
    }
}

export default Cell;

