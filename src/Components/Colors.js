import React from "react";
import { useState } from "react";


const RandomColor = ()=>{
    const [color,setColor]=useState('#000');
    const getRgb=()=>Math.floor(Math.random()*256);
    const rgbToHex = (r,g,b) =>
    '#' +
    [r,g,b].map(x=>{
        const hex=x.toString(16);
        return hex.length ===1 ?'0' + hex : hex ;

    }).join('');

    const handleGenerate = () => {
        const color = {
            r : getRgb(),
            g : getRgb(),
            b : getRgb(),
        };

        setColor(rgbToHex(color.r,color.g,color.b));
    };


    return(
      <>
<div style={{backgroundColor:color}}>
<button style={{color:color}} onClick={handleGenerate} >

        </button>
      </div>
      </>
    );

};

export default RandomColor;
// import {useState} from 'react';

// const Colors = () => {
// 	const [color,setColor] = useState("")
// 	const generateColor = () =>{
// 		setColor(Math.random().toString(16).substr(-6));
// 	};
// 	return {color,generateColor};
	
// };
// export default Colors;
