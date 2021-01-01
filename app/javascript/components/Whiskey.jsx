import React from "react";

export default class Whiskey extends React.Component {
  render() {
    const { whiskey } = this.props;

    return (
      <tr>
        <td>
          { whiskey.title }
        </td>
        <td colSpan="2">
        { whiskey.description }
        </td>
        <td>
          { whiskey.taste }
        </td>
        <td>
          { whiskey.color }
        </td>
        <td>
          { whiskey.smokiness }
        </td>
      </tr>
    )
  }
}
