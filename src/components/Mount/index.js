import React from "react";
import "./style.css";

function Mount(props) {
  // Function to capitalize first letter of each word
  function capitalize(str) {
    let capStr = str.split(" ");
    let finalStr = [];
    for (let i = 0; i < capStr.length; i++) {
      finalStr.push(capStr[i].charAt(0).toUpperCase() + capStr[i].slice(1));
    }
    return finalStr.join(" ");
  }

  return (
    <div className="mount">
      <a
        href={`https://ffxivcollect.com/mounts/${props.mount.ID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4>{props.mount.ID}</h4>
        <img
          className="align-top"
          src={`https://xivapi.com${props.mount.Icon}`}
          alt={props.mount.Name}
        />
        <h5>{capitalize(props.mount.Name)}</h5>
      </a>
    </div>
  );
}

export default Mount;
