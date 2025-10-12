import "bootstrap/dist/css/bootstrap.min.css";
import "../win95-bootstrap/win95.css";

import { it } from 'vitest'
import { render } from 'vitest-browser-react';
import HelpModal from "../HelpModal";

it("renders without crashing", () => {
  const helpModal = render(<HelpModal show={true}/>);
});
