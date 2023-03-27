import React, { useState } from 'react'

import { LogoColorsInt, RectInt } from '../model';

/* 
props:

- logoColors, setLogoColors
*/

interface Props {
  logoColors: LogoColorsInt;
  setLogoColors: React.Dispatch<React.SetStateAction<LogoColorsInt>>;
  rects: RectInt[];
  setRects: React.Dispatch<React.SetStateAction<RectInt[]>>;
}

const LogoControls = (props: Props) => {

  const {
    logoColors,
    setLogoColors,
    rects,
    setRects
  } = props

  const [hover, setHover] = useState(false)

  //todo: harmonize colors

  //todo: add rectangle

  //todo: set colors directly

  //todo: save color schemes

  //todo: style

  const style: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: 'grey',
    width: '400px'
    
  }

  const handleMouseEnter = () =>{
    setHover(true);
  }

  const handleMouseLeave = () =>{
    setHover(false);
  }

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      hello
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus consectetur sequi! Sunt enim inventore corrupti nobis, animi omnis deserunt suscipit recusandae ducimus perspiciatis cupiditate voluptatum. Incidunt, velit laborum? Quam?


    </div>
  )
}

export default LogoControls