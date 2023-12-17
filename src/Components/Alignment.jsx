import React from "react";
import "../styles/alignment.css";

function Alignment(props) {
  // const [alignmentState, setAlignmentState] = useState();

  return (
    <div className="alignment_wrapper">
      <h1 className="page_title">Alignment</h1>
      <div className="alignment_options">
        <button className="alignment" onClick={props.onclick} value="6">
          Lawful Good
        </button>
        <button className="alignment" onClick={props.onclick} value="6">
          Lawful Neutral
        </button>
        <button className="alignment" onClick={props.onclick} value="6">
          Lawful Evil
        </button>
        <button className="alignment" onClick={props.onclick} value="6">
          Chaotic Good
        </button>
        <button className="alignment" onClick={props.onclick} value="6">
          Chaotic Neutral
        </button>
        <button className="alignment" onClick={props.onclick} value="6">
          Choatic Evil
        </button>
        <button className="alignment" onClick={props.onclick} value="6">
          Neutral Good
        </button>
        <button className="alignment" onClick={props.onclick} value="6">
          True Neutral
        </button>
        <button className="alignment" onClick={props.onclick} value="6">
          Neutral Evil
        </button>
        
      </div>
      <a
          className="learn_button"
          href={"https://www.dndbeyond.com/sources/basic-rules/personality-and-background#Alignment"}
          // target="_blank"
        >
          {" "}
          Learn More
        </a>
      <button className="generic_button" onClick={props.onclick} value="4">Go Back</button>
    </div>
  );
}
export default Alignment;

