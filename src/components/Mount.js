import React from "react";

function MountDetail(props) {
  const imageLink = `https://xivapi.com${props.icon}`;

  return (
    <div className="text-center">
      <h3>Name: {props.name}</h3>
      <img src={imageLink} />
    </div>
  );
}

export default MountDetail;
