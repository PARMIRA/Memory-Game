import React, {useState,useRef, useEffect} from 'react';
import './style.css';
import Tile from './Tile.js';
const MemoryBoard = ({ all_images, level, changeWin, setImages }) => {
  const [moves,setMoves] = useState(0);
  const [is_second_click,setSecond] = useState(false);
  const [first_click, setFirstClick] = useState(null);
  const num_total = level*4;
  const [num_null,setNull] = useState(0);
  const [something_is_clicked,setSomething] = useState(false);
  const [prev,setPrev] = useState(null);
 useEffect(()=>{
    console.log("nulls",num_null);
    if(num_null === num_total){changeWin(true);
    setNull(0);}
  },[moves]);

  const rows = Array.from({ length: 4 }, (_, rowIndex) => (
    
    <div className="row" key={rowIndex}>
      {Array.from({ length: level }, (_, colIndex) => (
        <Tile
          key={colIndex}
          img_url={all_images[rowIndex][colIndex]}
          setMoves={setMoves}
          moves = {moves}
          setFirstClick = {setFirstClick}
          first_click = {first_click} 
          is_second_click = {is_second_click}
          setSecond = {setSecond}
          all_images={all_images}
          setNull = {setNull}
          something_is_clicked = {something_is_clicked}
          setSomething = {setSomething}
          prev = {prev}
          setPrev = {setPrev}
        />
      ))}
    </div>
  ));

  return (
    <div className="MemoryBoard">
      {rows}
    </div>
  );
};

export default MemoryBoard;
