import React, { Component } from "react";
import { Radio } from "react-bootstrap";

class Sort extends Component {
  setProperty = prop => {
    this.props.setSortProperty(prop);
  };

  render() {
    return (
      <ul>
        <p>Sort by:</p>
        <Radio name="sortProperty" onClick={e => this.setProperty("firstname")}>
          Firstname
        </Radio>
        <Radio name="sortProperty" onClick={e => this.setProperty("lastname")}>
          Lastname
        </Radio>
        <Radio name="sortProperty" onClick={e => this.setProperty("birthday")}>
          Birthday
        </Radio>
        <Radio name="sortProperty" onClick={e => this.setProperty("number")}>
          Number
        </Radio>
      </ul>
    );
  }
}

export default Sort;
