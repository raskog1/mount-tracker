import React from "react";
import Mount from "../Mount";

function MountContainer(props) {
  if (props.results.length > 20) {
    props.results.length = 20;
  }

  return (
    <div className="mount-container">
      {props.results.map((mount) => (
        <Mount mount={mount} key={mount.ID} />
      ))}
    </div>
  );
}

export default MountContainer;
