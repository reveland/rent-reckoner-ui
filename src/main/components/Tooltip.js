import React, { Component } from 'react';

class Tooltip extends Component {
    render() {
        let hovered = this.props.hovered
        let amount = this.props.amount
        let start = this.props.start
        let end = this.props.end
        let type = this.props.type
        return hovered ? this.createTooltip(start, end, amount, type) : null
    }

    createTooltip(start, end, amount, type) {
        console.log(start, end, amount, type)
        return <div>
            {type}
            {amount}
            {start} - {end}
        </div>
    }
}

export default Tooltip;
