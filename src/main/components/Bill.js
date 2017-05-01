import React, { Component } from 'react';

class Bill extends Component {
  render() {
    // let id = this.props.id
    // let amount = this.props.amount
    // let start = this.props.start
    // let end = this.props.end
    let height = this.props.height
    let width = this.props.width
    let x = this.props.x
    return this.createBill(height, width, x)
  }

  createBill(height, width, x) {
    return <g
      className="Bill"
      transform={"translate(" + x + ", 0)"}>
      <rect
        height={height}
        width={width}
      />
    </g>
  }
}

export default Bill;
