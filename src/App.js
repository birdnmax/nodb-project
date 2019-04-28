import React, {Component} from 'react';
import './App.css';
import ComicList from './Views/ComicList/ComicList';
import axios from 'axios';


class App extends Component {
  componentDidMount(){
    
  }
  render(){
    return (
      <div className="App">
        <h1>What is Funny?</h1>
        <div>
          <div className="column" id="undecided">
            <h2>Undecided</h2>
            <ComicList/>
          </div>
          <div className="column" id="funny">
            <h2>Funny</h2>
          </div>
          <div className="column" id="not-funny">
            <h2>Not Funny</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
