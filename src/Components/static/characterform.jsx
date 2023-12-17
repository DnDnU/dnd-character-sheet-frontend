import React from 'react';
class CharacterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <form>
            <label id="title">
                <br />
                <b>Run Them Stats B!</b>
            </label>
           
                <label class="stats-drop">Enter your Strength: </label>
                <input type="number" id="strength" name="str" min="1" max="20" />
            
                <label class="stats-drop">Enter your Dexterity: </label>
                <input type="number" id="dexterity" name="dex" min="1" max="20" />
         
                <label class="stats-drop">Enter your Constitution: </label>
                <input type="number" id="constitution" name="con" min="1" max="20" />
      
        
                <label class="stats-drop">Enter your Intelligence: </label>
                <input type="number" id="intelligence" name="int" min="1" max="20" />
           
                <label class="stats-drop">Enter your Wisdom (Khalifa): </label>
                <input type="number" id="wisdom" name="wis" min="1" max="20" />
     
                <label class="stats-drop">Enter your Charisma: </label>
                <input type="number" id="charisma" name="cha" min="1" max="20" />
       
                <button type="submit" id="stats-button"><b>Run 'Em!</b></button>
                
                </form>
         );
    }
}

 
export default CharacterForm;