import React from "react";
import XIVAPI from "./utils/XIVAPI";
import MountContainer from "./components/MountContainer";
import SearchForm from "./components/SearchForm";
import "./App.css";

class App extends React.Component {
  state = {
    result: [
      {
        Name: "tiger",
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
    const value = event.target.value; // this.state.search?
    const name = event.target.name; // "search"
    this.setState({
      [name]: value, //setting state.search to the field input
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMount(this.state.search);
  };

  render() {
    return (
      <>
        <h1>FFXIV Mounts</h1>
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
