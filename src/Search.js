import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <div className="form-group">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
