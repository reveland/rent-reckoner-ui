import React, { Component } from 'react';
import Row from './Row'

class Table extends Component {
  render() {
    let rows = this.props.rows;
    let start = this.props.start;
    let end = this.props.end;
    let sumMaxAmountPerDay = this.props.sumMaxAmountPerDay
    let height = this.props.height;
    let width = this.props.width
    let x = this.props.x
    let y = this.props.y
    return this.createTable(rows, sumMaxAmountPerDay, start, end, height, width, x, y)
  }

  createTable(rows, sumMaxAmountPerDay, start, end, height, width, x, y) {
    let rowY = 0
    return <g
      transform={"translate(" + x + ", " + y + ")"}
      className="Table"
      height={height}
      width={width}>
      {rows.map((type, i) => {
        let typeHeight = this.calculateRowHeight(sumMaxAmountPerDay, type.maxAmountPerDay, height)
        let typeWidth = this.calculateRowWidth(start, end, type.start, type.end, width)
        let rowX = this.calculateRowX(start, end, type.start, width)
        type = this.createRow(type, typeHeight, typeWidth, rowX, rowY, i)
        rowY += typeHeight
        return type
      })}
    </g>
  }

  createRow(type, height, width, x, y, i) {
    return <Row
      key={i}
      id={type.id}
      sections={type.sections}
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

  calculateRowX(start, end, typeStart, width) {
    let s = Number(new Date(start))
    let e = Number(new Date(end))
    let ts = Number(new Date(typeStart))
    return width - ((e - ts) / (e - s) * width)
  }

  calculateRowWidth(start, end, typeStart, typeEnd, width) {
    let s = Number(new Date(start))
    let e = Number(new Date(end))
    let ts = Number(new Date(typeStart))
    let te = Number(new Date(typeEnd))
    return (te - ts) / (e - s) * width
  }

  calculateRowHeight(sumMaxAmountPerDay, typeMaxAmountPerDay, height) {
    return typeMaxAmountPerDay / sumMaxAmountPerDay * height
  }
}

export default Table;
