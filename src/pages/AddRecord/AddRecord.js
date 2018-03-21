import React, { PureComponent } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { capitalize } from "lodash";

import { addRecord } from "../../reducer/record/actions";
import { generateId, getFormattedDate } from "../../utils";

import Field from "../../components/Field";

import "./AddRecord.css";

class AddRecord extends PureComponent {
  state = {
    form: {}
  };

  onChangeFirstname = e => {
    this.setValue("firstname", capitalize(e.target.value));
  };

  onChangeLastname = e => {
    this.setValue("lastname", capitalize(e.target.value));
  };

  onChangeBirthday = e => {
    const birthday = getFormattedDate(e.target.value);
    this.setValue("birthday", birthday);
  };

  onChangeNumber = e => {
    this.setValue("number", e.target.value);
  };

  setValue = (prop, value) => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [prop]: value
      }
    });
  };

  submitForm = e => {
    e.preventDefault();

    const record = this.state.form;

    this.props.addRecord({
      id: generateId(),
      data: record
    });

    this.form.reset();
    this.setState({
      form: {}
    });
  };

  render(
    { firstname = "", lastname = "", birthday = "", number = "" } = this.state
      .form
  ) {
    return (
      <Row className="addRecord">
        <Col xs={12} sm={8} className="wrapper">
          <form
            ref={form => (this.form = form)}
            className="recordForm"
            onSubmit={this.submitForm}
          >
            <Col xs={12} md={6}>
              <Field
                id="name"
                type="text"
                label="Name"
                placeholder="Enter name"
                onChange={this.onChangeFirstname}
                value={firstname}
                required
              />
            </Col>
            <Col xs={12} md={6}>
              <Field
                id="lastname"
                type="text"
                label="Lastname"
                placeholder="Enter lastname"
                onChange={this.onChangeLastname}
                value={lastname}
                required
              />
            </Col>
            <Col xs={12} md={6}>
              <Field
                id="birthday"
                type="date"
                label="Birthday"
                onChange={this.onChangeBirthday}
                value={birthday}
                required
              />
            </Col>
            <Col xs={12} md={6}>
              <Field
                id="number"
                type="number"
                label="Phone number"
                onChange={this.onChangeNumber}
                value={number}
                required
              />
            </Col>
            <Button id="submitBtn" type="submit">
              Create
            </Button>
          </form>
        </Col>
      </Row>
    );
  }
}

export default connect(null, {
  addRecord
})(AddRecord);
