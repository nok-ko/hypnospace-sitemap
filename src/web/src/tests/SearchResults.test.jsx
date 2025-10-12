import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../win95-bootstrap/win95.css";

import SearchResults from "../SearchModal/SearchResults";
import { it } from 'vitest';
import { render } from 'vitest-browser-react';

it("renders without crashing", () => {
  render(<div class="card"><SearchResults /></div>);
});
