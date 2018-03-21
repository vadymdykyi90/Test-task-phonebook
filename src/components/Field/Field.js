import React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

const Field = ({ id, label, validationState, ...props }) => {
  return (
    <FormGroup controlId={id} validationState={validationState}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
};

export default Field;
