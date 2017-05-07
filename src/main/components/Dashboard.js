import React, { Component } from 'react';
import Type from './Type'

class Dashboard extends Component {
  render() {
    let types = this.props.types;
    let start = this.props.start;
    let end = this.props.end;
    let sumMaxAmountPerDay = this.props.sumMaxAmountPerDay
    let height = this.calculateHeight();
    let width = this.calculateWidth(start, end)
    return this.createDashboard(types, sumMaxAmountPerDay, start, end, height, width)
  }

  createDashboard(types, sumMaxAmountPerDay, start, end, height, width) {
    let y = 0
    return <svg
      className="Dashboard"
      height={height}
      width={width}>
      {types.map((type, i) => {
        let typeHeight = this.calculateTypeHeight(sumMaxAmountPerDay, type.maxAmountPerDay, height)
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
    return 640
  }

  calculateWidth(start, end) {
    // let s = Number(new Date(start))
    // let e = Number(new Date(end))
    // return (e - s) / 86400000 * 5
    return 1600
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

  calculateTypeHeight(sumMaxAmountPerDay, typeMaxAmountPerDay, height) {
    return typeMaxAmountPerDay / sumMaxAmountPerDay * height
  }
}

export default Dashboard;
