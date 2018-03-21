import React, { Component } from "react";
import { Modal, Button, Col } from "react-bootstrap";
import { capitalize } from "lodash";

import Field from "../../../components/Field";

import { getFormattedDate } from "../../../utils";

class EditModal extends Component {
  state = {
    data: {}
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.record
    });
  }

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
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        [prop]: value
      }
    });
  };

  onUpdate = e => {
    e.preventDefault();

    const { updateRecord } = this.props;
    const { data, id } = this.state;

    updateRecord({ data, id });
  };

  render({ isOpen, onClose, removeRecord } = this.props) {
    const { data } = this.state;

    return (
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            ref={form => (this.form = form)}
            className="recordForm"
            onSubmit={this.onUpdate}
          >
            <Col xs={12} md={6}>
              <Field
                id="name"
                type="text"
                label="Name"
                placeholder="Enter name"
                onChange={this.onChangeFirstname}
                value={data.firstname}
                required
              />
            </Col>
            <Col xs={12} md={6}>
              <Field
                id="surname"
                type="text"
                label="Surname"
                placeholder="Enter surname"
                onChange={this.onChangeLastname}
                value={data.lastname}
                required
              />
            </Col>
            <Col xs={12} md={6}>
              <Field
                id="birthday"
                type="date"
                label="Birthday"
                onChange={this.onChangeBirthday}
                value={data.birthday}
                required
              />
            </Col>
            <Col xs={12} md={6}>
              <Field
                id="number"
                type="number"
                label="Phone number"
                onChange={this.onChangeNumber}
                value={data.number}
                required
              />
            </Col>
            <Button id="submitBtn" type="submit">
              Save
            </Button>
            <Button
              id="removeBtn"
              bsStyle="danger"
              onClick={() => removeRecord()}
            >
              Remove
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default EditModal;
