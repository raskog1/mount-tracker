import React from "react";
import Mount from "../Mount";


function MountContainer(props) {

  if (props.results.length > 10) {
    props.results.length = 10;
  }

  return (
    <div className="mount-container">
      {props.results.map((mount) => (
        <Mount mount={mount} key={props.results.Name} />
      ))}
    </div>
  );

}

export default MountContainer;