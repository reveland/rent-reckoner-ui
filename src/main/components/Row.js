import React, { Component } from 'react';
import Section from './Section'

class Row extends Component {
    render() {
        let id = this.props.id
        let sections = this.props.sections
        let name = this.props.name
        let maxAmountPerDay = this.props.maxAmountPerDay
        let start = this.props.start
        let end = this.props.end
        let height = this.props.height
        let width = this.props.width
        let x = this.props.x
        let y = this.props.y
        return this.createRow(sections, name, maxAmountPerDay, height, width, x, y, start, end, id)
    }

    createRow(sections, name, maxAmountPerDay, height, width, x, y, start, end, id) {
        return <g
            className="Row"
            transform={"translate(" + x + ", " + y + ")"}>
            {sections.map((bill, i) => {
                let billWidth = this.calculateSectionWidth(start, end, bill.start, bill.end, width)
                let billHeight = this.calculateSectionHeight(maxAmountPerDay, bill.amountPerDay, height)
                let billX = this.calculateSectionX(start, end, bill.start, width)
                bill = this.createSection(bill, name, billHeight, billWidth, billX, i, id)
                return bill
            })}
        </g>
    }

    calculateSectionX(start, end, billStart, width) {
        let s = new Date(start)
        let e = new Date(end)
        let bs = new Date(billStart)
        e.setDate(e.getDate() + 10);
        return width - ((e - bs) / (e - s) * (width))
    }

    createSection(bill, type, height, width, x, i, typeId) {
        return <Section
            key={i}
            amount={bill.amount}
            id={bill.id}
            amountPerDay={bill.amountPerDay}
            start={bill.start}
            end={bill.end}
            height={height}
            width={width}
            x={x}
            type={type}
            typeId={typeId}
        />
    }

    calculateSectionWidth(start, end, billStart, billEnd, width) {
        let ts = Number(new Date(start))
        let te = Number(new Date(end))
        let bs = Number(new Date(billStart))
        let be = Number(new Date(billEnd))
        return (be - bs) / (te - ts) * width
    }

    calculateSectionHeight(maxAmountPerDay, amountPerDay, height) {
        return amountPerDay / maxAmountPerDay * height
    }
}



export default Row;
