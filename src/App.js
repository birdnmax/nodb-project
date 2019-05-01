import React, {Component} from 'react';
import './App.css';
import ComicList from './Views/ComicList/ComicList';


class App extends Component {
  componentDidMount(){
    
  }
  render(){
    return (
      <div className="App">
        <ComicList/>
      </div>
    );
  }
}

export default App;
