import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APP_ID = 'd172fffa';
  const API_KEY = "0dc8ee686a919c496640ef5ede142d9b";

  const [recipes, setRecipes] = useState([]);



  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await response.json();
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search </button>
      </form>
    </div>
  )
}

export default App;
