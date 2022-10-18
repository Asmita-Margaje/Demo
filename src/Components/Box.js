import React from "react";
// import './Box.css';
import '../App.css';


function Box({ id, color, onClick, selected, x, y,backgroundColor,border }) {
//   const position = `translate(${x}px,${y}px)`;
  return (
    <div
      onClick={onClick}
      className="box"
      id={id}

      style={{
        backgroundColor: color,
        border :border,
        zIndex: id + 1,
        // transform: position,
        // transform:"none",
        position:'relative',
        // border: `${
        //   selected == id ? "solid 4px #ffffffb4" : "solid 2px #ffffff42"
        // }`,
      }}
    ></div>
  );
}

export default Box;
