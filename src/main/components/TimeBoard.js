import React, { Component } from 'react';
import Table from './Table'

class TimeBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0
        }
    }

    render() {
        let tables = this.props.tables
        let width = this.calculateWidth()
        let numberOfTable = tables.length
        return this.createTimeBoard(tables, width, numberOfTable)
    }

    createTimeBoard(tables, width, numberOfTable) {
        let y = 0
        return <svg
            className="TimeBoard"
            width={width}
            height={numberOfTable * this.calculateTableHeight()}>
            {tables.map((table, i) => {
                let tableHeight = this.calculateTableHeight()
                let tableWidth = width
                let tableSvg = this.createTable(table, tableHeight, tableWidth, y, i)
                y += tableHeight
                return tableSvg
            })}
        </svg>
    }

    createTable(table, height, width, y, i) {
        return <Table
            key={i}
            rows={table.rows}
            sumMaxAmountPerDay={table.sumMaxAmountPerDay}
            start={table.start}
            end={table.end}
            height={height}
            width={width}
            x={0}
            y={y}
        />
    }

    calculateTableHeight() {
        return 640
    }

    calculateWidth() {
        return 1600
    }
}

export default TimeBoard;
