
import React, { useEffect, useState } from 'react'

function ColorBox({initialColor}) {
    const [boxColor, setboxColor] = useState(initialColor);

    // onChange est un événement qui se produit lorsque la valeur d'un élément change
    // ici onChange
const changeColor = () => {
    const newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    console.log(newColor);
    setboxColor(newColor);
  }
  return (
    <div style={{backgroundColor: boxColor, width: '100px', height: '100px'}} >
      <button onClick={changeColor}>change color</button>
    </div>
  )
}

export default ColorBox
