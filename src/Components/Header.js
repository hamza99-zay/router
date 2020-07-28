import React from "react";



const Header = (props) => {
  return (
    <div>
    <header className="App-header">
      
      <h1>{props.text}</h1>
    </header>
    </div>
  );
};

export default Header;