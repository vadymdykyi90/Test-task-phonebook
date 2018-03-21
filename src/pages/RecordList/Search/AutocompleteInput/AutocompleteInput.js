import React, { Component } from "react";
import ReactAutocomplete from "react-autocomplete";

class AutocompleteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  isRenderProperty = (item, value) => {
    const { property } = this.props;

    return value && String(item.data[property]).includes(value);
  };

  renderSelectRow = (item, highlighted) => (
    <div
      key={item.id}
      style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
    >
      {item.data[this.props.property]}
    </div>
  );

  getValue = item => {
    return String(item.data[this.props.property]);
  };

  onChange = e => {
    const value = e.target.value;
    this.updateFilter(value);
  };

  updateFilter = value => {
    const { setFilter, property } = this.props;
    this.setState({ value });
    setFilter(property, value);
  };

  render({ property, records } = this.props) {
    return (
      <ReactAutocomplete
        items={records}
        getItemValue={this.getValue}
        shouldItemRender={this.isRenderProperty}
        renderItem={this.renderSelectRow}
        value={this.state.value}
        onChange={this.onChange}
        onSelect={this.updateFilter}
      />
    );
  }
}

export default AutocompleteInput;
