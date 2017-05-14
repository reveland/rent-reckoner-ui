import React, { Component } from 'react'

class Section extends Component {
  render() {
    // let id = this.props.id
    let amount = this.props.amount
    let start = this.props.start
    let end = this.props.end
    let rowName = this.props.rowName
    let rowId = this.props.rowId
    let height = this.props.height
    let width = this.props.width
    let x = this.props.x
    let y = this.props.y
    return this.createSection(rowId, height, width, x, y, start, end, amount, rowName)
  }

  createSection(rowId, height, width, x, y, start, end, amount, rowName) {
    return <g
      transform={"translate(" + x + ", " + y + ")"}>
      <rect
        height={height}
        width={width}
        fill={this.getColor(rowId)}
      >
        <title>{rowName}, {amount}, {start.substring(0, 10)}-{end.substring(0, 10)}</title>
      </rect>
    </g>
  }

  getColor(id) {
    id = isNaN(id)
      ? 0
      : id;
    const colors = ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928", "#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f", "darkgreen", "limegreen", "darkblue", "lightskyblue", "darkviolet", "violet", "gold", "orangered", "goldenrod", "blue", "olive", "goldenrod", "yellow", "darkblue", "brown", "blueviolet", "chartreuse", "chocolate", "coral", "deepskyblue", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgreen", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellowgreen"];
    return colors[id]
  }
}

export default Section;
