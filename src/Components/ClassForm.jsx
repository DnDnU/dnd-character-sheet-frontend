import React, { useState, useEffect } from "react";
import ClassInfo from "./ClassInfo"

function ClassForm(props) {
  const [classState, setClassState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/classes/all")
      .then(response => response.json())
      .then(data => setClassState(data.classResponse));
  }, []);

  const images = [
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/371/420/618/636272706155064423.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/346/420/618/636272691461725405.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/359/420/618/636272697874197438.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/489/420/618/636274646181411106.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/365/420/618/636272701937419552.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/367/420/618/636272702826438096.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/384/420/618/636272820319276620.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/485/420/618/636274643818663058.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/375/420/618/636272708661726603.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/357/420/618/636272696881281556.png"
  ];

  return (
    <div className="page_title">
      <h1>Choose Your Character's Class</h1>
      <div className="multiple_class_cards">           
        {classState.map((item, index) => {
          item.image = images[index];
          return (
            <div className="class_card">
              <h1 className="dndClass_name" key={item.classId}>{item.name}</h1>
              <img className="dndClass_image" src={item.image} />
              <ClassInfo index={index + 1} classSelect={props.handleClassSelect} />

              <a
                className="learn_button"
                href={"https://www.dndbeyond.com/classes/" + item.name}
                target="_blank"
                >
                  Learn More
                </a>

              <button id={classState[index].classId}className="select-class_button" name="dndClass" onClick={props.onclick} value="4">
                {`Select ${item.name}`}
              </button>

            </div>
          );
        })}

      </div>
        <button className="generic_button" onClick={props.onclick} value="2">
          Back
        </button>
    </div>
 
  );
}

export default ClassForm;
