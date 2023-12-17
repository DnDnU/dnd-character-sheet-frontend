import React, { useState, useEffect } from "react";
import "../styles/final.css";
import {calculateModifier} from "../utils/modifier-calculator";

function StatTable(props) {
  const [stats, setStats] = useState({
    "STR": "",
    "DEX": "",
    "CON": "",
    "INT": "",
    "WIS": "",
    "CHA": ""
  })
  useEffect(() => {
    const {state, bonus} = props;
    const {strength, dexterity, constitution, intelligence, wisdom, charisma} = state;
    setStats({
      STR: Number(strength) + Number(bonus[0]), 
      DEX: Number(dexterity) + Number(bonus[1]), 
      CON: Number(constitution) + Number(bonus[2]), 
      INT: Number(intelligence) + Number(bonus[3]), 
      WIS: Number(wisdom) + Number(bonus[4]), 
      CHA: Number(charisma) + Number(bonus[5])
    })
  }, [props])

  return (
    <table className="final-stats">
      <thead>
        <tr>
          <th>Stat</th>
          {Object.getOwnPropertyNames(stats).map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Value</th>
          {Object.getOwnPropertyNames(stats).map((title, index) => (
            <td key={index}>{stats[title]}</td>
          ))}
        </tr>
        <tr>
          <th>Mod</th>
          {Object.getOwnPropertyNames(stats).map((title, index) => (
            <td key={index}>{calculateModifier(Number(stats[title]))}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

function FinalSheet(props) {
  const [final, setFinal] = useState(props.state);
  const [info,setInfo] = useState(props.info)

  const attributeTitles = ["Strength  ", "Dexterity  ", "Constitution  ", "Intelligence  ", "Wisdom  ", "Charisma  "]
  const [raceInfo, setRaceInfo] = useState([]);

  const images = [
    null,
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/466/420/618/636274570630462055.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png"
  ];

  console.log(final);
  console.log(props.info);
  return (
    <div className="final_card">
      <div className="image-card">
      <img className="final-img" src={images[Number(props.imageRace)]} />
      </div>
      <div className="race_info">
        <label className="stats-wrapper">
          <StatTable state={props.state} bonus={props.info.ability_bonuses}/>
        </label>
          <br></br>
        <label> Name:
          <h3>{props.state.username}</h3>
        </label>
          <br></br>
        <label> Class:
          <h3>{final.dndClass}</h3>
        </label>
          <br></br>
        <label> Age:
          <h3>{props.info.age}</h3>
        </label>
          <br></br>
        <label> Alignment:
          <h3>{props.info.alignment}</h3>
        </label>
          <br></br>
        <label> Speed:
          <h3>{props.info.speed}</h3>
        </label>
          <br></br>
        <button className="generic_button" type="submit" value="1" name="back" onClick={props.onclick}>
          Create Another Character
        </button>

        </div>
    
</div>


  );
}

export default FinalSheet;
