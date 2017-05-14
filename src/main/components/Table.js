import React, { Component } from 'react';
import Row from './Row'

class Table extends Component {
  render() {
    let rows = this.props.rows;
    let start = this.props.start;
    let end = this.props.end;
    let sumMaxSectionHeight = this.props.sumMaxSectionHeight
    let height = this.props.height;
    let width = this.props.width
    let x = this.props.x
    let y = this.props.y
    return this.createTable(rows, sumMaxSectionHeight, start, end, height, width, x, y)
  }

  createTable(rows, sumMaxSectionHeight, start, end, height, width, x, y) {
    let rowY = 0
    return <g
      transform={"translate(" + x + ", " + y + ")"}
      className="Table"
      height={height}
      width={width}>
      {rows.map((row, i) => {
        let typeHeight = this.calculateRowHeight(sumMaxSectionHeight, row.maxSectionHeight, height)
        let typeWidth = this.calculateRowWidth(start, end, row.start, row.end, width)
        let rowX = this.calculateRowX(start, end, row.start, width)
        row = this.createRow(row, typeHeight, typeWidth, rowX, rowY, i)
        rowY += typeHeight
        return row
      })}
    </g>
  }

  createRow(row, height, width, x, y, i) {
    return <Row
      key={i}
      id={row.id}
      sections={row.sections}
      name={row.name}
      maxSectionHeight={row.maxSectionHeight}
      height={height}
      width={width}
      x={x}
      y={y}
      start={row.start}
      end={row.end}
    />
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

  calculateRowHeight(sumMaxSectionHeight, maxSectionHeight, height) {
    return maxSectionHeight / sumMaxSectionHeight * height
  }
}

export default Table;
