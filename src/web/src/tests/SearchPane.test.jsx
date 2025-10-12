import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../win95-bootstrap/win95.css";

import { render } from 'vitest-browser-react';
import SearchPane from "../SearchModal/SearchPane";
import { it } from 'vitest';

it("renders without crashing", () => {
  render(
    <SearchPane searchFields={{ pageNameQuery: "", citizenNameQuery: "", tagsQuery: "" }} />
  );
});
