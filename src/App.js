import React, {useState} from 'react';
import './App.css';
import Random from './components/Random.js';
import GiphyDisplay from './components/GiphyDisplay.js';

function App() {
  //example of search api call
  // const [tag, setTag] = useState(null)
  // const getTag = async (input) => {
  //   const response = await fetch(
  //     `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}&tag=${input}`
  //   )
  //   const data = await response.json()
  //   setTag(data)
  // }


  const [giphyData, setGiphyData] = useState({})

  const makeApiCall = async() => {
    const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=VjNXDEttZUF1oTKahzVhHbsGIemwaIDl&tag=&rating=g';

    const res = await fetch(giphyUrl);
    const json = await res.json();

    setGiphyData(json)
  }
  console.log(giphyData)

  return (
    <div className="App">
      <h1>GIPHY APP</h1>
      <GiphyDisplay giphy={giphyData}/> 
      <div className='random'>
        <Random getGiphy={makeApiCall}/>  
      </div> 
      

    </div>
  );
}

export default App;
