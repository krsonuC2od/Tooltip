import { useState } from "react";
import './index.css'

 const Tooltip = ({ text, children }) => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <div
      className="TooltipContainer"
      onMouseEnter={() => setisVisible(true)}
      onMouseLeave={() => setisVisible(false)}
    >
      {children}
      {isVisible && <div className="Tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;