import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function SortBar(props) {
    return (
        <div className="sortBar">
            <div className="sortColumn" id="id">
                <p>ID</p>
                <FontAwesomeIcon
                    className="upIcon"
                    icon={faCaretUp}
                    onClick={props.idClick} />
                <FontAwesomeIcon
                    className="downIcon"
                    icon={faCaretDown}
                    onClick={props.revIdClick} />
            </div>
            <div className="sortColumn" id="name">
                <p>Name</p>
                <FontAwesomeIcon
                    className="upIcon"
                    icon={faCaretUp}
                    onClick={props.alphaClick} />
                <FontAwesomeIcon
                    className="downIcon"
                    icon={faCaretDown}
                    onClick={props.revAlphaClick} />
            </div>
        </div>
    )
}

export default SortBar;