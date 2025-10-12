import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../win95-bootstrap/win95.css";

import { render } from 'vitest-browser-react';
import PageDetails from "../PageDetails/PageDetails";
import { it } from 'vitest';

it("renders without crashing", () => {
  const pageDetails = render(<PageDetails />);
});
