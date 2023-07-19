import React, { useState } from "react";
import Hover from "./Hover";

function Tooltip() {
  const [toolTip, settoolTip] = useState("Thanks for hovering! I'm a tooltip");
  const [position, setPosition] = useState("top");
  return (
    <>
    <div>
    
      <input style={{margin:20}} onChange={e => settoolTip(e.target.value)} type="text" placeholder="Enter Tooltip here"/>
      <label style={{color:'black',marginLeft:5}}>Tooltip position</label>
      <select style={{margin:10}}  onClick={e=> setPosition(e.target.value) }>
      <option value='top'>top</option> 
      <option value='left'>left</option>
        <option value='right'>right</option>
        <option value='bottom'>bottom</option>
      </select>
    </div>
    <Hover position={position} toolTip={toolTip} />
    </>
  );
}

export default Tooltip;
