import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MemoryBoard from './MemoryBoard'; // Assuming this is the correct import for MemoryBoard

const Game = () => {
  const [level, setLevel] = useState(1); // Set a default level
  const [progress,setProgress] = useState(0);
  const [win, changeWin] = useState(false);
  const [final,setFinal] = useState(false);
  function shuffleArray(array) {
    return array.slice().sort(() => Math.random() - 0.5);
  }
  var[allImages,setImages]=useState(shuffleArray([['./images/img_2.jpeg'], ['./images/img_1.jpeg'], ['./images/img_1.jpeg'], ['./images/img_2.jpeg']]))
  
  const [loading, setLoading] = useState(true);
  async function fetchImages() {
    try {
      // Make POST request to the server
      console.log("level",level);
      const response = await axios.post('http://127.0.0.1:5000/', { level });
      // Log the response data
      console.log('Response from /submit:', response.data);
      const images = response.data.img;
      setImages(images); // Set the images to state
      console.log("img",images);

      setLoading(false);
    } catch (error) {
      // Log the error details
      console.error('Error fetching images:', error);
    }
  }

  useEffect(() => {
    setLoading(true); 
    fetchImages();
    if(level === 5){setFinal(true);}
  }, [level]);
  
  useEffect(() => {
    if (win) {
      setProgress(p=>p+20);
      if (level < 5) {
        setLevel(prevLevel => prevLevel + 1); // Using functional update
      } else {
        console.log('You have won the game!');
      }
      changeWin(false);
    }
  }, [win]);

  return (
    <div >
      <div className="header-container">
      {(!final)?(<h2 className="header">
        THE EPIC MEMORY GAME
      </h2>):(<h2 className="header">
        NICE BRAIN! YOU WON!
      </h2>)}
     </div>
     {loading ? (
        <p>Loading...</p> // Display a loading message or spinner while fetching data
      ) : ((!final) &&
       ( <MemoryBoard
          all_images={allImages}
          level={level}
          changeWin={changeWin}
        />)
      )}

    </div>
  );
};

export default Game;