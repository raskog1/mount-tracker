import React from "react";
import "./style.css";

function Mount(props) {

  console.log("Mount is firing...");
  console.log(props);
  return (

    <div className="mount">

      <h4>{props.mount.ID}</h4>
      <img
        className="align-top"
        src={`https://xivapi.com${props.mount.Icon}`}
        alt={props.mount.Name} />
      <p>{props.mount.Name}</p>
    </div>

  );
}

export default Mount;