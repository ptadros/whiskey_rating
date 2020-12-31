import React from "react";
import { Link } from "react-router-dom";

class NewWhiskey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      taste: 0,
      color: 0,
      smokiness: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/whiskeys";
    const { title, description, taste, color, smokiness } = this.state;

    if (title.length == 0)
      return;

    const body = {
      title,
      description,
      taste,
      color,
      smokiness
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to Create Whiskey");
      })
      .then(response => this.props.history.push(`/whiskeys`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new whisky
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="Title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description</label>
                <input
                  type="textarea"
                  name="description"
                  id="description"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="taste">Taste Grade</label>
                <input
                  type="number"
                  name="taste"
                  id="taste"
                  min="0"
                  max="10"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="color">Color Grade</label>
                <input
                  type="number"
                  name="color"
                  id="color"
                  min="0"
                  max="10"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="smokiness">Smokiness</label>
                <input
                  type="number"
                  name="smokiness"
                  id="smokiness"
                  min="0"
                  max="10"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>

              <button type="submit" className="btn custom-button mt-3">
                Create
              </button>
              <Link to="/whiskeys" className="btn btn-link mt-3">
                Back to Whiskeys
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewWhiskey;
