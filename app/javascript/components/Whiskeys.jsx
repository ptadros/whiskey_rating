import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Whiskey from "../components/Whiskey";
class Whiskeys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      matchedList: [],
      filters: {
        query: '',
        minGrade: 0
      }
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
      .then(response => this.setState({ list: response, matchedList: response }))
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

  setFilter = (name, value) => {
    let { filters } = this.state
    filters[name] = value
    this.setState({filters}, this.updateMatchedList);
  }

  updateMatchedList() {
    let matchedList = this.getMatchedList();
    this.setState({matchedList});
  }

  getMatchedList() {
    const { list, filters } = this.state;
    let matchedList = list;

    if(filters.query != '') {
      matchedList = matchedList.filter(
        w => w.title.toLowerCase().includes(filters.query) ||
        w.description.toLowerCase().includes(filters.query)
      )
    }

    matchedList = matchedList.filter(
      w => w.taste >= filters.minGrade &&
      w.color >= filters.minGrade &&
      w.smokiness >= filters.minGrade
    )
    return matchedList;
  }

  render() {
    const { matchedList } = this.state;
    const whiskeys = (
      <table className="table table-striped">
        { this.headers()}
        <tbody>
          {
            matchedList.map((whiskey, index) => (
              <Whiskey whiskey={whiskey} key={index} />
            ))
          }
        </tbody>
      </table>
    );

    const noWhiskeys = (
      <div className="justify-content-left">
        <h4>
          No Results found
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
              <Link to="/whiskey/new" className="btn btn-primary">
                Create New Whiskey
              </Link>
            </div>
            <Search setFilter={this.setFilter} />
            {matchedList.length > 0 ? whiskeys : noWhiskeys}
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
