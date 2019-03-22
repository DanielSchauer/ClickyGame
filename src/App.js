import React, { Component } from 'react';
import './App.css';
import Header from'./components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Nav from './components/Nav/Nav.js'
import images from './Data.json';
import CharacterCard from './components/CharacterCard';
//Game starts with a score of 0
//Score increases if image is clicked
//Score resets if same image is clicked twice
//Images resuffle after a image is clicked
//Game restarts if Score is 0


class App extends Component {
  state = {
    images
    }
  render() {
    return (
      
      <div className="App">
        <Nav />
        <Header />
        {this.state.images.map(image => (
          <CharacterCard 
          key={image.id} 
          backgoundImage={image.backgoundImage}/>
        ))}
        

        <Footer />
      </div>
    );
  }
}

export default App;
