import React from "react";


export default class Search extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="form-group col-md-4 ml-0">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search by title or description"
            className="form-control"
            onChange={this.props.onChange}
          />
        </div>
        <div className="input-group mb-3 col-md-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="minGradeSelect">Min Grade</label>
          </div>
          <select
            className="custom-select"
            id="minGradeSelect"
            onChange={this.props.onSelectChange}
          >
            {
              [...Array(11)].map((_,i) => (
                <option key={'option' + i} value={i}>{i}</option>
              ))
            }
          </select>
        </div>
      </div>

    )
  }
}
