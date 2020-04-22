import React, { Component } from "react";
import CardList from "../Component/CardList";
import SearchBox from "../Component/SearchBox";
import Scroll from "../Component/Scroll";
import ErrorBounday from "../Component/ErrorBounday";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robort: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        return Response.json();
      })
      .then((users) => {
        this.setState({ robort: users });
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filterrobort = this.state.robort.filter((robort) => {
      return robort.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBounday>
            <CardList robort={filterrobort} />
          </ErrorBounday>
        </Scroll>
      </div>
    );
  }
}

export default App;
