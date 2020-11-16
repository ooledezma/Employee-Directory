import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
      <nav className="navbar navbar-light bg-light ml-auto mr-auto">
        <form className="form-inline">
          <input
           onChange={props.handleInputChange}
           className="form-control mr-sm-2" 
           type="search" 
           placeholder="Search" 
           aria-label="Search"    
           />
        </form>
      </nav>
  );
}

export default SearchForm;



