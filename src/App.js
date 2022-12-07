import React, {useState} from 'react';
import './App.css';
import Random from './components/Random.js';
import GiphyDisplay from './components/GiphyDisplay.js';

function App() {
  const [giphyData, setGiphyData] = useState({})

  const makeApiCall = async() => {
    const giphyUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=VjNXDEttZUF1oTKahzVhHbsGIemwaIDl&limit=25&rating=g';

    const res = await fetch(giphyUrl);
    const json = await res.json();

    setGiphyData(json)
  }
  console.log(giphyData)
  
  return (
    <div className="App">
      <h1>GIPHY APP</h1>
      <Random getGiphy={makeApiCall}/>
      <GiphyDisplay giph={giphyData}/>
    </div>
  );
}

export default App;
