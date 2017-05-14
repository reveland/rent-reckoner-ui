import React, { Component } from 'react';
import Table from './Table'

class TimeBoard extends Component {
    render() {
        let tables = this.props.tables
        let width = this.calculateWidth()
        let numberOfTable = tables.length
        let start = this.props.start
        let end = this.props.end
        return this.createTimeBoard(tables, width, numberOfTable, start, end)
    }

    createTimeBoard(tables, width, numberOfTable, start, end) {
        let y = 0
        return <svg
            className="TimeBoard"
            width={width}
            height={numberOfTable * this.calculateTableHeight()}>
            {tables.map((table, i) => {
                let tableHeight = this.calculateTableHeight()
                let tableWidth = this.calculateTableWidth(start, end, table.start, table.end, width)
                let tableX = this.calculateTableX(start, end, table.start, width)
                let tableSvg = this.createTable(table, tableHeight, tableWidth, tableX, y, i)
                y += tableHeight
                return tableSvg
            })}
        </svg>
    }

    createTable(table, height, width, x, y, i) {
        return <Table
            key={i}
            rows={table.rows}
            sumMaxSectionHeight={table.sumMaxSectionHeight}
            start={table.start}
            end={table.end}
            height={height}
            width={width}
            x={x}
            y={y}
        />
    }

    calculateTableX(start, end, TableStart, width) {
        let s = Number(new Date(start))
        let e = Number(new Date(end))
        let ts = Number(new Date(TableStart))
        return width - ((e - ts) / (e - s) * width)
    }

    calculateTableWidth(start, end, tableStart, tableEnd, width) {
        let s = Number(new Date(start))
        let e = Number(new Date(end))
        let ts = Number(new Date(tableStart))
        let te = Number(new Date(tableEnd))
        return (te - ts) / (e - s) * width
    }

    calculateTableHeight() {
        return 330
    }

    calculateWidth() {
        return 1200
    }
}

export default TimeBoard;
