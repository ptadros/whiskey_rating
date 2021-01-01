import React from "react";
import { Link } from "react-router-dom";
import Whiskey from "../components/Whiskey";

class Whiskeys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    const url = "/api/whiskeys";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Couldn't fetch Whiskeys.");
      })
      .then(response => this.setState({ list: response }))
      .catch(() => this.props.history.push("/"));
  }

  headers() {
    return (
      <thead>
        <tr>
          <th>
            Title
          </th>
          <th colSpan="2">
            Description
          </th>
          <th>
            Taste
          </th>
          <th>
            Color
          </th>
          <th>
            Smokiness
          </th>
        </tr>
      </thead>
    )
  }

  render() {
    const { list } = this.state;
    const whiskeys = (
      <table className="table table-striped">
        { this.headers()}
        <tbody>
          {
            list.map((whiskey, index) => (
              <Whiskey whiskey={whiskey} key={index} />
            ))
          }
        </tbody>
      </table>
    );

    const noWhiskeys = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No Whiskeys yet. <Link to="/new_whiskey">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Whiskeys</h1>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/whiskey" className="btn btn-primary">
                Create New Whiskey
              </Link>
            </div>
            <div className="container">
              {list.length > 0 ? whiskeys : noWhiskeys}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}

export default Whiskeys;
