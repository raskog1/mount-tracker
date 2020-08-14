import React from "react";
import Mount from "../Mount";


function MountContainer(props) {
  console.log("mountContainer is firing");
  console.log(props);

  if (props.results.length > 5) {
    props.results.length = 5;
  }

  return (
    <div className="mount-container">
      {props.results.map((mount) => (
        <Mount mount={mount} />
      ))}
    </div>
  );

}

export default MountContainer;