import React, { Component } from "react";
import { connect } from "react-redux";
import { capitalize, keys, sortBy } from "lodash";

import { Row, Col, Table, Button } from "react-bootstrap";

import { removeRecord, editRecord } from "../../reducer/record/actions";
import { setFilter, resetFilters } from "../../reducer/filter/actions";
import { setSortProperty, resetSortProperty } from "../../reducer/sort/actions";

import Sort from "./Sort";
import Search from "./Search";
import EditModal from "./EditModal";
import Record from "./Record";

import "./RecordList.css";

class RecordList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      filtered: props.records
    };
  }

  static columns = ["firstname", "lastname", "birthday", "number"];

  componentDidMount() {
    this.filterRecords(this.props);
    this.sortRecords(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        filtered: nextProps.records
      },
      () => {
        this.filterRecords(nextProps);
        this.sortRecords(nextProps);
      }
    );
  }

  renderCols = () => {
    return (
      <tr>
        {RecordList.columns.map(prop => <th key={prop}>{capitalize(prop)}</th>)}
      </tr>
    );
  };

  renderRecords = ({ filtered } = this.state) => {
    return filtered.map(record => (
      <Record
        columns={RecordList.columns}
        key={record.id}
        openEdit={this.onOpenEdit}
        record={record}
      />
    ));
  };

  filterRecords = ({ filters }) => {
    const { filtered } = this.state;

    const records = filtered.filter(record =>
      this.filtersToArray(filters).every(f =>
        this.isRecordIncludesValue(f, record.data)
      )
    );

    this.setState({
      filtered: records
    });
  };

  sortRecords = ({ sortProperty }) => {
    const { filtered } = this.state;

    if (!sortProperty) return;

    this.setState({
      filtered: sortBy(filtered, rec => rec.data[sortProperty])
    });
  };

  filtersToArray = filters => {
    return keys(filters).map(key => ({
      key,
      value: filters[key]
    }));
  };

  isRecordIncludesValue = (filter, record) => {
    const { key, value } = filter;
    return !value || String(record[key]).includes(value);
  };

  removeRecord = ({ editedRecord } = this.state) => {
    this.props.removeRecord(editedRecord.id);
    this.onCloseEdit();
  };

  updateRecord = record => {
    this.props.editRecord(record);
    this.onCloseEdit();
  };

  onOpenEdit = record => {
    this.setState({
      isEdit: true,
      editedRecord: record
    });
  };

  onCloseEdit = () => {
    this.setState({
      isEdit: false
    });
  };

  resetSettings = () => {
    this.props.resetFilters();
    this.props.resetSortProperty();
  };

  updateSortSettings = (property, value) => {
    this.props.setSortProperty(property, value);
  };

  render({ isEdit, editedRecord, filtered } = this.state) {
    const { setFilter, filters } = this.props;

    return (
      <div>
        <Row>
          <Col xs={10}>
            <Search
              filters={filters}
              records={filtered}
              setFilter={setFilter}
            />
          </Col>
          <Col xs={2}>
            <Sort setSortProperty={this.updateSortSettings} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button className="resetBtn" onClick={this.resetSettings}>
              Reset
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Table bordered hover>
              <thead>{this.renderCols()}</thead>
              <tbody>{this.renderRecords()}</tbody>
            </Table>
            <EditModal
              isOpen={isEdit}
              record={editedRecord}
              removeRecord={this.removeRecord}
              updateRecord={this.updateRecord}
              onClose={this.onCloseEdit}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  ({ recordReducer, filterReducer, sortReducer }) => ({
    records: recordReducer.get("records").toJS(),
    sortProperty: sortReducer.property,
    filters: filterReducer.toJS()
  }),
  {
    removeRecord,
    editRecord,
    setFilter,
    resetFilters,
    setSortProperty,
    resetSortProperty
  }
)(RecordList);
