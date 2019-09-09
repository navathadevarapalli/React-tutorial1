import React from "react";
import "./App.css";
import Headlines from "./func-comp";

function App() {
  return (
    <React.Fragment>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh"
      }}
    >
      <div
        className="card"
        style={{
          width: 400,
          border: "5px solid green",
          textAlign: "center"
        }}
      >
        <div className="card-body">
          <Headlines></Headlines>
        </div>
      </div>
    </div>

    <div style={{display :'flex' , justifyContent : 'center'}}>Example</div>
    </React.Fragment>
    
  );
}

export default App;
