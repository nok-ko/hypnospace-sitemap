import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../win95-bootstrap/win95.css";

import { render } from 'vitest-browser-react';
import SearchModal from "../SearchModal/SearchModal";
import { it } from 'vitest';

it("renders without crashing", () => {
  render(<SearchModal searchFields={
    {  
      pageNameQuery: "", 
      citizenNameQuery: "", 
      tagsQuery: ""
    }
  }
  show={true}/>);
});
