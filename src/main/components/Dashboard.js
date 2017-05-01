import React, { Component } from 'react';
import Type from './Type'

class Dashboard extends Component {
  render() {
    let types = this.props.types;
    // let start = this.props.start;
    // let end = this.props.end;
    let sumMaxAmount = this.props.sumMaxAmount
    let height = this.calculateHeight();
    let width = this.calculateWidth()
    return this.createDashboard(types, sumMaxAmount, height, width)
  }

  createDashboard(types, sumMaxAmount, height, width) {
    let y = 0
    return <svg
      className="Dashboard"
      height={height}
      width={width}>
      {types.map((type, i) => {
        let typeHeight = this.calculateTypeHeight(sumMaxAmount, type.maxAmount, height)
        type = this.createType(type, typeHeight, width, y, i)
        y += typeHeight
        return type
      })}
    </svg>
  }

  createType(type, height, width, y, i) {
    return <Type
      key={i}
      id={type.id}
      bills={type.bills}
      name={type.name}
      maxAmount={type.maxAmount}
      height={height}
      width={width}
      y={y}
      start={type.start}
      end={type.end}
    />
  }

  calculateHeight() {
    return 400
  }

  calculateWidth() {
    return 600
  }

  calculateTypeHeight(sumMaxAmount, typeMaxAmount, height) {
    return typeMaxAmount / sumMaxAmount * height
  }
}

export default Dashboard;
