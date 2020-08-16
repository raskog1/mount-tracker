import React from "react";
import XIVAPI from "./utils/XIVAPI";
import MountContainer from "./components/MountContainer";
import SearchForm from "./components/SearchForm";
import "./App.css";

class App extends React.Component {
  state = {
    result: [
      {
        Name: "",
        Icon: "",
        ID: "",
      },
    ],
    search: "",
  };

  componentDidMount() {
    this.searchMount("");
  }

  searchMount(query) {
    XIVAPI.search(query)
      .then((mountList) => this.setState({ result: mountList.Results }))
      // Log just to verify contents
      .catch((err) => console.log(err));
  }

  // This is firing every time I type a letter in the search box
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    // const value = event.target.value; // this.state.search?
    // const name = event.target.name; // "search"
    // this.setState({
    //   [name]: value, //setting state.search to the field input
    // });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMount(this.state.search);
  };

  alphaClick = (e) => {
    console.log("Sorting by alpha...");
    const mountList = this.state.result;
    this.setState({ result: mountList.sort(this.sortResults("Name")) });
  }

  sortResults(key, order = "asc") {

    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const letA = (typeof a[key] === "string") ? a[key].toUpperCase() : a[key];
      const letB = (typeof b[key] === "string") ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (letA > letB) {
        comparison = 1;
      } else if (letA < letB) {
        comparison = -1;
      }
      return ((order === "desc") ? (comparison * -1) : comparison);
    };
  }

  render() {
    return (
      <>
        <h1>FFXIV Mounts</h1>
        <button onClick={this.alphaClick}>Sort</button>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <MountContainer results={this.state.result} />
      </>
    );
  }
}

export default App;
