import React from 'react'

import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function Hover({position,toolTip}) {
  return (
    <div>
    <Tippy placement={position} content={toolTip}>
    <button style={{margin:30}}>Hover over me!</button>
   </Tippy>
    </div>
  )
}

export default Hover
