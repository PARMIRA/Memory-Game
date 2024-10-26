import React, { useState, useEffect } from "react";
import './style.css'; // Correct import path


const Tile = ({ img_url, setMoves, setFirstClick, first_click, is_second_click, setSecond, setNull, setSomething, something_is_clicked, prev, setPrev }) => {
    const [img, setImg] = useState(img_url);
    const [is_clicked, setClick] = useState(false);
    const [last_clicked, setLast] = useState(false);

    const handleClick_1 = () => {
        setClick(true);
    }

    const handleClick_2 = () => {
        setMoves(prevMoves => prevMoves + 1);

        if (prev !== null) {
            prev.setLast(false);
        }
        setPrev({ last_clicked, setLast });
      
      if (first_click !== null && is_second_click && img !== null && !last_clicked) {
            if (first_click.img === img) {
                first_click.setImg(null);
                setImg(null);
                setNull(n => n + 2);
            }
        }
        
        if (!is_second_click) {
            setFirstClick({ img, setImg });
        }

        setLast(true);
        setSecond(!is_second_click);
        setSomething(true);
      }

    useEffect(() => {
        if (is_clicked) {
            const timer = setTimeout(() => { setClick(false) }, 500);
            return () => clearTimeout(timer); // Clean up the timer
        }
    }, [is_clicked]);

    const handleTileClick = () => {
        if (!something_is_clicked) {
            handleClick_1();
            setTimeout(() => { handleClick_2();
            setSomething(false);
          
            }, 200);
        }
    }

    return (
        <div onClick={handleTileClick}>
            {is_clicked && img !== null ? 
                (<button
                    style={{
                        width: '100px', 
                        height: '100px',
                        backgroundImage: `url(${process.env.PUBLIC_URL}${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: 'white',
                        border: '5px solid white',
                        padding: '0',
                        cursor: 'pointer'

                    }}></button>) :
                (<button
                    style={{
                        width: '100px', 
                        height: '100px',
                        backgroundColor: img === null ? 'brown' : 'black',
                        backgroundPosition: 'center',
                        border: '5px solid white',
                        padding: '0',
                        cursor: 'pointer'
                    }}></button>)
            }
        </div>
    );
};

export default Tile;
