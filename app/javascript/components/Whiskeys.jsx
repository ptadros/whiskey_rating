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
      <div className="row bg-header">
        <div className="col-md-2">
          Title
        </div>
        <div className="col-md-4">
          Description
        </div>
        <div className="col-md-2">
          Taste
        </div>
        <div className="col-md-2">
          Color
        </div>
        <div className="col-md-2">
          Smokiness
        </div>
      </div>
    )
  }

  render() {
    const { list } = this.state;
    const whiskeys = (
      <div className="container">
        { this.headers() }
        {
          list.map((whiskey, index) => (
            <Whiskey whiskey={whiskey} key={index} />
          ))
        }
      </div>
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
              <Link to="/whiskey" className="btn custom-button">
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
