import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'd172fffa';
  const API_KEY = "0dc8ee686a919c496640ef5ede142d9b";

  const exampleReq =
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
