import React from "react";
import XIVAPI from "./utils/XIVAPI";
import MountContainer from "./components/MountContainer"
import SearchForm from "./components/SearchForm"
import "./App.css";

class App extends React.Component {

  state = {
    result: [
      {
        Name: "",
        Icon: "",
        ID: ""
      },
    ],
    search: "",
  };

  componentDidMount() {
    this.searchMount("");
  }

  searchMount(query) {
    XIVAPI.search(query)
      .then((res) => this.setState({ result: res.Results }))
      // Log just to verify contents
      .catch((err) => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
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
          handleFormSubmit={this.handleFormSubmit} />
        <MountContainer results={this.state.result} />
      </>
    );
  }
}

export default App;
