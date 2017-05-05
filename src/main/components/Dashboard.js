import React, { Component } from 'react';
import Type from './Type'

class Dashboard extends Component {
  render() {
    let types = this.props.types;
    let start = this.props.start;
    let end = this.props.end;
    let maxMaxAmountPerDay = this.props.maxMaxAmountPerDay
    let height = this.calculateHeight();
    let width = this.calculateWidth(start, end)
    return this.createDashboard(types, maxMaxAmountPerDay, start, end, height, width)
  }

  createDashboard(types, maxMaxAmountPerDay, start, end, height, width) {
    let y = 0
    return <svg
      className="Dashboard"
      height={height}
      width={width}>
      {types.map((type, i) => {
        let typeHeight = this.calculateTypeHeight(maxMaxAmountPerDay, type.maxAmountPerDay, height)
        let typeWidth = this.calculateTypeWidth(start, end, type.start, type.end, width)
        let x = this.calculateTypeX(start, end, type.start, width)
        type = this.createType(type, typeHeight, typeWidth, x, y, i)
        y += typeHeight
        return type
      })}
    </svg>
  }

  createType(type, height, width, x, y, i) {
    return <Type
      key={i}
      id={type.id}
      bills={type.bills}
      name={type.name}
      maxAmountPerDay={type.maxAmountPerDay}
      height={height}
      width={width}
      x={x}
      y={y}
      start={type.start}
      end={type.end}
    />
  }

  calculateHeight() {
    return 400
  }

  calculateWidth(start, end) {
    let s = Number(new Date(start))
    let e = Number(new Date(end))
    return (e - s) / 86400000 * 5
  }

  calculateTypeX(start, end, typeStart, width) {
    let s = Number(new Date(start))
    let e = Number(new Date(end))
    let ts = Number(new Date(typeStart))
    return width - ((e - ts) / (e - s) * width)
  }

  calculateTypeWidth(start, end, typeStart, typeEnd, width) {
    let s = Number(new Date(start))
    let e = Number(new Date(end))
    let ts = Number(new Date(typeStart))
    let te = Number(new Date(typeEnd))
    return (te - ts) / (e - s) * width
  }

  calculateTypeHeight(maxMaxAmountPerDay, typeMaxAmountPerDay, height) {
    return typeMaxAmountPerDay / maxMaxAmountPerDay * height
  }
}

export default Dashboard;
