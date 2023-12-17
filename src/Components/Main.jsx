import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import UserForm from "./UserForm";
import CharFrom from "./ClassForm";
import RaceForm from "./RaceForm";
import Alignment from "./Alignment";
import StatForm from "./StatForm";
import FinalSheet from "./Final";


function Main(props) {
  const statForm = {
    step: 1,
    username: "",
    charactername: "",
    dndClass: "",
    race: "dwarf",
    raceId: "1",
    alignment: "",
    strength: "",
    dexterity: "",
    consitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
    subscribe: false
  };
  const [state, setState] = useState({
    step: 1,
    username: "",
    charactername: "",
    dndClass: "",
    race: "dwarf",
    raceId: "0",
    alignment: "",
    strength: "",
    dexterity: "",
    consitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
    subscribe: false
  });
  const [image, setImage] = useState("");
  const [content, setContent] = useState("1");
  const [classInfo, setClassInfo] = useState({
    "0": {
      index: "",
      name: "",
      hit_die: "",
    }
  });
  const [raceInfo, setRaceInfo] = useState({
    "0": {
      index: "",
      name: "",
      speed: "",
      ability_bonuses: [],
      alignment: "",
      age: ""
    }
  });

  function handleClassSelect(classInfo) {
    const { index, name, hit_die } = classInfo;
    const newClassInfo = classInfo
    newClassInfo[index] = {index, name, hit_die}
    setClassInfo(newClassInfo);
  }

  function handleRaceSelect(raceResponse) {
    const { index, name, speed, ability_bonuses, alignment, age } = raceResponse;
    const newRaceInfo = raceInfo;
    newRaceInfo[index] = { index, name, speed, ability_bonuses, alignment, age }
    setRaceInfo(newRaceInfo);
  }

  function handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const val = event.target.value;
    let newState = state;
    newState[name] = val;
    setState(newState);
  }

  function handleClick(event) {
    const name = event.target.name;
    const tempVal = event.target.innerText;
    const raceImage = event.target.id;
    const newState = state;
    if (tempVal.match(/Select /i)) { 
      const val = tempVal.split("Select ")[1];
      newState[name] = val;
      if (name === "race") {
        newState.raceId = raceImage;
        setImage(raceImage);
      }
    } else {
      const val = tempVal;
      newState[name] = val;
    }
    setState(newState);
    const formKey = event.target.value;
    setContent(formKey);
  }

  function handleFormClick(event) {
    event.preventDefault();
    const formKey = event.target.value;
    setContent(formKey);
  }
  const currState = {
    "1": <Landing onclick={handleFormClick} />,
    "2": <UserForm onchange={handleChange} onclick={handleFormClick} />,
    "3": <CharFrom 
    handleClassSelect={handleClassSelect}
    onchange={handleChange} 
    onclick={handleClick} 
    />,
    "4": (
      <RaceForm
        handleRaceSelect={handleRaceSelect}
        onchange={handleChange}
        onclick={handleClick}
      />
    ),
    "5": <Alignment onclick={handleClick} />,
    "6": <StatForm race={raceInfo[state.raceId].ability_bonuses} onclick={handleClick} onchange={handleChange} />,
    "7": (
      <FinalSheet state={state} imageRace={image} onchange={handleChange} onclick={handleClick} info={raceInfo[state.raceId]} />
    )
  };
  return <div>{currState[content]}</div>;
}

export default Main;
