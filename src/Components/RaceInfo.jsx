import React, { useState, useEffect } from "react";

function RaceInfo(props) {
  const attributeTitles = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
  const [raceInfo, setRaceInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/races/${props.index}`)
      .then(res => res.json())
      .then(response => {
        setRaceInfo(response);
        setIsLoading(false);
        props.raceSelect(response);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="race-info">
      {isLoading && <p>Please Wait</p>}
      <div color = "white">
        <label> 
          <h3>Speed: {raceInfo.speed}</h3>
            <br></br>
          <span className="race-info_age">
            <h3 className="race-info_subtitle">Age: </h3>
            {raceInfo.age}
          </span>
            <br></br>
          <span className="race-info_alignment">
            <h3 className="race-info_subtitle">Alignment: </h3>
            {raceInfo.alignment}
          </span>
            <br></br>
            <br></br>
          <span className="race-info_bonus">
            <h3 className="race-info_subtitle">Bonuses: </h3>
            <table>
              <thead>
                <tr>
                  {attributeTitles.map((title, index) => <th key={index}>{title}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {raceInfo.ability_bonuses && raceInfo.ability_bonuses.map((val, index) => 
                    <td key={index}>{val}</td>)}
                </tr>
              </tbody>
            </table>
          </span>
        </label>
      </div>
    </div>
  );
}

export default RaceInfo;
