import React, { Component } from 'react';
import Bill from './Bill'

class Type extends Component {
    render() {
        let id = this.props.id
        let bills = this.props.bills
        let name = this.props.name
        let maxAmountPerDay = this.props.maxAmountPerDay
        let start = this.props.start
        let end = this.props.end
        let height = this.props.height
        let width = this.props.width
        let x = this.props.x
        let y = this.props.y
        return this.createType(bills, name, maxAmountPerDay, height, width, x, y, start, end, id)
    }

    createType(bills, name, maxAmountPerDay, height, width, x, y, start, end, id) {
        let billX = 0
        return <g
            className="Type"
            transform={"translate(" + x + ", " + y + ")"}>
            {bills.map((bill, i) => {
                let billWidth = this.calculateBillWidth(start, end, bill.start, bill.end, width)
                let billHeight = this.calculateBillHeight(maxAmountPerDay, bill.amountPerDay, height)
                bill = this.createBill(bill, name, billHeight, billWidth, billX, i, id)
                billX += billWidth
                return bill
            })}
        </g>
    }

    createBill(bill, type, height, width, x, i, typeId) {
        return <Bill
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

    calculateBillWidth(start, end, billStart, billEnd, width) {
        let ts = Number(new Date(start))
        let te = Number(new Date(end))
        let bs = Number(new Date(billStart))
        let be = Number(new Date(billEnd))
        return (be - bs) / (te - ts) * width
    }

    calculateBillHeight(maxAmountPerDay, amountPerDay, height) {
        return amountPerDay / maxAmountPerDay * height
    }
}



export default Type;
