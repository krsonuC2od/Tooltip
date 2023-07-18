import Tooltip from './Tooltip'
import './index.css'

function App() {
  return (
    <>
     <Tooltip text={"Thanks for hovering! I'm a tooltip"}>
     <span id='Imtext' disabled>Hover over me!</span>
     </Tooltip>
    </>
  );
}

export default App;
