import React, { Component } from 'react';
import Section from './Section'

class Row extends Component {
    render() {
        let id = this.props.id
        let sections = this.props.sections
        let name = this.props.name
        let maxSectionHeight = this.props.maxSectionHeight
        let start = this.props.start
        let end = this.props.end
        let height = this.props.height
        let width = this.props.width
        let x = this.props.x
        let y = this.props.y
        return this.createRow(sections, name, maxSectionHeight, height, width, x, y, start, end, id)
    }

    createRow(sections, name, maxSectionHeight, height, width, x, y, start, end, id) {
        return <g
            className="Row"
            transform={"translate(" + x + ", " + y + ")"}>
            {sections.map((section, i) => {
                let sectionWidth = this.calculateSectionWidth(start, end, section.start, section.end, width)
                let sectionHeight = this.calculateSectionHeight(maxSectionHeight, section.sectionHeight, height)
                let sectionX = this.calculateSectionX(start, end, section.start, width)
                section = this.createSection(section, name, sectionHeight, sectionWidth, sectionX, i, id)
                return section
            })}
        </g>
    }

    createSection(section, rowName, height, width, x, i, rowId) {
        return <Section
            key={i}
            id={section.id}
            height={height}
            width={width}
            x={x}
            y={0}
            rowName={rowName}
            rowId={rowId}
            start={section.start}
            end={section.end}
            amount={section.amount}
        />
    }

    calculateSectionX(start, end, SectionStart, width) {
        let s = new Date(start)
        let e = new Date(end)
        let ss = new Date(SectionStart)
        e.setDate(e.getDate());
        return width - ((e - ss) / (e - s) * (width))
    }

    calculateSectionWidth(start, end, SectionStart, sectionEnd, width) {
        let ts = Number(new Date(start))
        let te = Number(new Date(end))
        let ss = Number(new Date(SectionStart))
        let se = Number(new Date(sectionEnd))
        return (se - ss) / (te - ts) * width
    }

    calculateSectionHeight(maxSectionHeight, sectionHeight, height) {
        return sectionHeight / maxSectionHeight * height
    }
}

export default Row;
