import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search for a Mount:</label>
                {/* <row className="field-button"> */}
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="col-9"
                    placeholder="Search For a Mount"
                    id="search"
                />

                <button
                    onClick={props.handleFormSubmit}
                    className="btn-primary col-2"
                >
                    Search
          </button>
                {/* </row> */}
            </div>
        </form>
    );
}

export default SearchForm;
