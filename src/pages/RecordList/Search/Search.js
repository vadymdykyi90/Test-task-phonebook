import React, { Component } from "react";

import AutocompleteInput from "./AutocompleteInput";
import DateFilter from "./DateFilter";

import "./Search.css";

class Search extends Component {
  state = {};
  render({ records, setFilter, filters } = this.props) {
    return (
      <ul className="searchBox">
        <div className="searchBox__input">
          <label>Firstname</label>
          <AutocompleteInput
            property="firstname"
            records={records}
            setFilter={setFilter}
            value={filters.firstname}
          />
        </div>
        <div className="searchBox__input">
          <label>Lastname</label>
          <AutocompleteInput
            property="lastname"
            records={records}
            setFilter={setFilter}
            value={filters.lastname}
          />
        </div>
        <DateFilter setFilter={setFilter} value={filters.birthday} />
        <div className="searchBox__input">
          <label>Number</label>
          <AutocompleteInput
            property="number"
            records={records}
            setFilter={setFilter}
            value={filters.number}
          />
        </div>
      </ul>
    );
  }
}

export default Search;
