import React from "react";
import XIVAPI from "../utils/XIVAPI";
import MountDetail from "./Mount";

class Mount extends React.Component {
  state = {
    result: [
      {
        Name: "Otter",
      },
    ],
    search: "",
  };

  componentDidMount() {
    this.searchMount("tiger");
  }

  searchMount(query) {
    XIVAPI.search(query)
      .then((res) => this.setState({ result: res.Results }))
      // Log just to verify contents
      .then(() => console.log(this.state.result[0].Name))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <container>
        <h1>FIX ME</h1>
        <MountDetail name={this.state.result[0].Name} />
      </container>
    );
  }
}

export default Mount;
