import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../win95-bootstrap/win95.css";

import React from "react";
import ReactDOM from "react-dom";
import SearchFields from "../SearchModal/SearchFields";
import { it } from 'vitest';

it("renders without crashing", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(
    <SearchFields searchFields={{ pageNameQuery: "", citizenNameQuery: "", tagsQuery: "" }} />,
    div
  );
});
