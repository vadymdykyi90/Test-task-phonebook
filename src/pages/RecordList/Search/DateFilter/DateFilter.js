import React, { Component } from "react";

import { getFormattedDate } from "../../../../utils";

class DateFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || getFormattedDate(new Date())
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.value) {
      this.setState({
        value: getFormattedDate(new Date())
      });
      return;
    }

    this.setState({
      value: nextProps.value
    });
  }

  updateFilter = e => {
    const { value } = e.target;
    this.props.setFilter("birthday", value);
  };

  render({ value } = this.state) {
    return (
      <div className="searchBox__input">
        <label>Birthday</label>
        <input
          ref={input => (this.input = input)}
          type="date"
          onChange={this.updateFilter}
          value={value}
        />
      </div>
    );
  }
}

export default DateFilter;
