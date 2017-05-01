import React, { Component } from 'react';
import Bill from './Bill'

class Type extends Component {
    render() {
        // let id = this.props.id
        let bills = this.props.bills
        let name = this.props.name
        let maxAmount = this.props.maxAmount
        let start = this.props.start
        let end = this.props.end
        let height = this.props.height
        let width = this.props.width
        let y = this.props.y
        return this.createType(bills, name, maxAmount, height, width, y, start, end)
    }

    createType(bills, name, maxAmount, height, width, y, start, end) {
        let x = 0
        return <g
            className="Type"
            transform={"translate(0, " + y + ")"}>
            {bills.map((bill, i) => {
                let billWidth = this.calculateBillWidth(start, end, bill.start, bill.end, width)
                bill = this.createBill(bill, name, height, billWidth, x, i)
                x += billWidth
                return bill
            })}
        </g>
    }

    createBill(bill, type, height, width, x, i) {
        return <Bill
            key={i}
            id={bill.id}
            amount={bill.amount}
            start={bill.start}
            end={bill.end}
            height={height}
            width={width}
            x={x}
        />
    }

    calculateBillWidth(start, end, billStart, billEnd, width) {
        let ts = Number(new Date(start))
        let te = Number(new Date(end))
        let bs = Number(new Date(billStart))
        let be = Number(new Date(billEnd))
        return (be - bs) / (te - ts) * width
    }
}



export default Type;
