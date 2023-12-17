import React, { useState } from "react";
import "../styles/main.css";

function Landing(props) {
  return (
    <div className = "landing-div">
      <h1 className="page_title">Welcome Adventurer!</h1>
      <h2 className="page_title">Let's create your D&D champion!</h2>
        <center>
        <br></br>
      <button className="generic_button" type="submit" value="2" name="next" onClick={props.onclick}>
        Get Started
      </button>
      </center>
    </div>
  );
}

export default Landing;
