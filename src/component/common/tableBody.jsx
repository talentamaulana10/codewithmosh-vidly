import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <tbod>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td />
            ))}
          </tr>
        ))}
      </tbod>
    );
  }
}

export default TableBody;
