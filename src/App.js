import React, { Component } from "react";
// import InputRange from '../node_modules/react-input-range';

import "./App.css";
// import 'react-input-range/lib/css/index.css';

class App extends Component {
  state = {
    charType: "brute",
    charName: "",
    xp: 0,
    totalGold: 0,
    goldNotes: {},
    items: {},
    itemHistory: {},
    perks: {
      /*To Do...*/
    },
    perkNotes: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <div className="CharacterType">
          <div className="ClassIcon" />
          <div className="ClassName">
            <h2>Inox Brute</h2>
          </div>
        </div>
        <form>
          <input
            type="text"
            name="charName"
            onChange={this.handleChange}
            value={this.state.charName}
          />
          <div className="CharacterLevel">
            Level:
            <div className="Level">1</div>
            <div className="Level">2</div>
            <div className="Level">3</div>
            <div className="Level">4</div>
            <div className="Level">5</div>
            <div className="Level">6</div>
            <div className="Level">7</div>
            <div className="Level">8</div>
            <div className="Level">9</div>
          </div>
          <div className="CharacterXP">
            <h3>XP</h3>
            <button>-</button>
            {this.state.xp}
            <button>+</button>
            <br />
            <input
              type="range"
              min={0}
              max={45}
              name="xp"
              value={this.state.xp}
              onChange={this.handleChange}
            />
          </div>
          <div className="Gold">
            <h3>Gold</h3>
            {this.state.totalGold} <br />
            Modify Gold:
            <input type="input" name="goldLineItem" placeholder="0" />
            <button>Modify Gold</button>
            <br />
            <a href="#">Show transaction history</a>
          </div>
          <div className="Items">
            <h3>Items:</h3>
            <ul>
              <li>
                Item <button>x</button>
              </li>
            </ul>
            Add Item:{" "}
            <input type="text" name="addItem" placeholder="Search Items" />
            <button>+</button>
          </div>
          <div className="Notes">
            <h3>Notes</h3>
            <input type="text-area" name="notes" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
