import React, { Component } from 'react';
import './App.css';
import Header from'./Header.js';
import './Header.css';
import Footer from './Footer.js';
import './Footer.css';
import Nav from './Nav.js'
import './Nav.css'
import MarioCard from  "./components/CharacterCard/Mario"
import BowserCard from  "./components/CharacterCard/Bowser"
import LuigiCard from  "./components/CharacterCard/Luigi"
import PeachCard from  "./components/CharacterCard/Peach"
import DaisyCard from  "./components/CharacterCard/Daisy"
import WarioCard from  "./components/CharacterCard/Wario"
import WaluigiCard from  "./components/CharacterCard/Waluigi"
import BowserJrCard from  "./components/CharacterCard/BowserJr"
import DKCard from  "./components/CharacterCard/DK"
import DiddyKongCard from  "./components/CharacterCard/DiddyKong"
import RosalinaCard from  "./components/CharacterCard/Rosalina"
import YoshiCard from  "./components/CharacterCard/Yoshi"
//Game starts with a score of 0
//Score increases if image is clicked
//Score resets if same image is clicked twice
//Images resuffle after a image is clicked
//Game restarts if Score is 0







class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Nav />
        <Header />

        <MarioCard />
        <LuigiCard />
        <PeachCard />
        <DaisyCard />
        <RosalinaCard />
        <YoshiCard />
        <WarioCard />
        <WaluigiCard />
        <BowserCard />
        <BowserJrCard />
        <DKCard />
        <DiddyKongCard />

        <Footer />
      </div>
    );
  }
}

export default App;
