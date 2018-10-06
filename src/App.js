import React, { Component } from 'react';

import './App.css'
import yearbook from './brettk.png'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header container">
          <h1 className="welcome-to-da-boof"> Welcome to Boofnation</h1>
          <h1>All hail the Honorable <span className="boof-it-baby">Boofer</span>, Judge Brett Kavanaugh</h1>
          <h2>The first <span className="boof-it-baby">boofer</span> to grace the Supreme Court of the United States</h2>
        </header>
        <div className="pic-of-my-boy-brett">
          <img src={yearbook} alt={"yearbook"} />
        </div>
        <div className="whitehouse-grillin">
          <h2>Our glorious leader not betraying our secret, and answering the question like a boss</h2>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/D6yFnizey7k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className="colbert-killin">
          <h2>Liberal Media on our Man's Case</h2>

          <iframe width="420" height="315" src="https://www.youtube.com/embed/U2_52Dj6DsI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div><div className="snl-killin">
          <iframe width="420" height="315" src="https://www.youtube.com/embed/VRJecfRxbr8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className = "shoot-myself-in-the-footer">
          <p>
            In case you didn't notice, this site is obvs satire. Copyright 2018 Boofnation.com
          </p>
        
        </div>
      </div>
    );
  }
}

export default App;
