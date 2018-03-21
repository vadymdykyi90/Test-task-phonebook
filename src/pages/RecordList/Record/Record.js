import React, { PureComponent } from "react";
import { capitalize } from "lodash";

import "./Record.css";

class Record extends PureComponent {
  renderValues = ({ record, columns } = this.props) => {
    return columns.map((col, i) => (
      <td key={record.id + i}>{capitalize(record.data[col])}</td>
    ));
  };

  onClickHandler = () => {
    const selection = window.getSelection();

    if (selection.type === "Range") {
      return;
    }

    const { record } = this.props;
    this.props.openEdit(record);
  };

  render() {
    return <tr onClick={this.onClickHandler}>{this.renderValues()}</tr>;
  }
}

export default Record;
