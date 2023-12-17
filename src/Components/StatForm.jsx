import React, { useState, useEffect } from "react";
import useFetchGet from "../utils/utils";
import ModifierCalculator from "../utils/modifier-calculator";
import DiceRoll from "../utils/dice-roll";
import "../styles/stat.css";

// Dice Rolls
const DiceRow = ({ diceRollArray = [] }) => {
  return (
    <table className="diceroll">
      <tbody>
        <tr>
          {diceRollArray.map((roll, index) => 
              <td className="die-value selection" key={index}>
                {roll}
              </td>
          )
          }
        </tr>
      </tbody>
    </table>
  );
};

// Row of Stats in StatForm Table
const StatRow = ({ attribute, bonus, statechange }) => {
  const [modifier, setModifier] = useState(0);
  const [stat, setStat] = useState(0);
  const [total, setTotal] = useState(0);

  function formatSelectedRolls() {
    const diceRollList = document.querySelectorAll(".die-value");
    const statInputs = document.querySelectorAll(".stat-value");
    let matchIndex = {};
    for (let x=0; x < diceRollList.length; x++) {
      let findCount = 0;
      let die = diceRollList[x];
      for (let i = 0; i < statInputs.length; i++) {
        let stat = statInputs[i];
        if (findCount > 0) {
          continue;
        } 
        if (stat.value === die.textContent) {
          if (matchIndex[die.textContent] === i) {
            continue;
          } else {
            matchIndex[die.textContent] = i;
            die.classList.add('selected');
            findCount += 1;
          }
        }
      }
    }
    
    const selectedRolls = document.querySelectorAll(".selected")
    let duplicateSet = {}
    if (selectedRolls.length && selectedRolls.length > 0) {
      selectedRolls.forEach((selected) => {
        let selectCount = 0;
        statInputs.forEach((stat, index) => {
          if (selected.textContent === stat.value) {
            if (duplicateSet[selected.textContent] === index) {
            } else {
              selectCount += 1;
              duplicateSet[selected.textContent] = index;
            }
          }
        })
        if (selectCount === 0) {
          selected.classList.remove('selected');
        }
      })
    }
  }

  function handleChange(event) {
    const statValue = event.target.value;
    setStat(statValue);
    formatSelectedRolls();
    statechange(event);
  }

  useEffect(() => {
    const total = Number(stat) + Number(bonus);
    const mod = ModifierCalculator.calculateModifier(total);
    setModifier(mod);
    setTotal(total);
  }, [stat, bonus]);

  return (
    <tr className="stat-table_row">
      <th>{attribute}</th>
      <td>
        <label className="attribute-value">
          <input
            type="number"
            className="stat-value"
            name={attribute}
            onChange={handleChange}
            defaultValue="0"
          ></input>
        </label>
      </td>
      <td>
        <label className="bonus-value">{bonus}</label>
      </td>
      <td>
        <label className="total-value">{total}</label>
      </td>
      <td>
        <label className="modifier-value">{modifier}</label>
      </td>
    </tr>
  );
};

// Character stat form
function StatForm(props) {
  const [statRolls, setStatRolls] = useState([]);
  const [bonusArray, setBonusArray] = useState([]);
  const attributes = [
    { attribute: "strength", bonus: bonusArray[0] },
    { attribute: "dexterity", bonus: bonusArray[1] },
    { attribute: "constitution", bonus: bonusArray[2] },
    { attribute: "intelligence", bonus: bonusArray[3] },
    { attribute: "wisdom", bonus: bonusArray[4] },
    { attribute: "charisma", bonus: bonusArray[5] }
  ]
  useEffect(() => {
    async function getRolls() {
      const statRolls = [];
      for (let i = 0; i < attributes.length; i++) {
        let roll = await DiceRoll.rollStats();
        statRolls.push(roll);
      }
      setStatRolls(statRolls);
      props.race && setBonusArray(props.race);
    }
    getRolls();
  }, [props.race]);

  return (
    <div className="statform-wrapper">
      <DiceRow diceRollArray={statRolls} />
      <form className="statform">
        <table className="stat-table">
          <thead>
            <tr>
              {tableHeaders.map((i, index) => (
                <th key={index}>{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attributes.map((item, index) => {
              return (
                <StatRow
                  key={index}
                  attribute={item.attribute}
                  bonus={item.bonus}
                  diceRollArray={statRolls}
                  statechange={props.onchange}
                />
              );
            })}
          </tbody>
        </table>
      </form>
      <div className="button-wrapper">
      <button className="generic_button" onClick={props.onclick} value="5">
          Back
        </button>
        <button className="generic_button" onClick={props.onclick} value="7">
          Next
        </button>
      </div>
    </div>
  );
}

const tableHeaders = ["Attribute", "Value", "Bonus", "Total", "Modifier"];

export default StatForm;
