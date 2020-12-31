import React from "react";

export default class Whiskey extends React.Component {
  render() {
    const { whiskey } = this.props;

    return (
      <div className="row mb-2 mt-2">
        <div className="col-md-2">
          { whiskey.title }
        </div>
        <div className="col-md-4">
        { whiskey.description }
        </div>
        <div className="col-md-2">
          { whiskey.taste }
        </div>
        <div className="col-md-2">
          { whiskey.color }
        </div>
        <div className="col-md-2">
          { whiskey.smokiness }
        </div>
      </div>
    )
  }
}
