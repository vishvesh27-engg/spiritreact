import './App.css';
import Home from './component/Home';
import Photogrid from './component/Photogrid';
function App() {
  return (
    <>
    <Home />
    <div style={{backgroundImage:`url('Vector49.svg')`}}>
      <h1 style={{paddingLeft:"10px"}}>Meet the Team</h1>
      <div style={{paddingLeft: "30px",paddingRight:"0px"}}>
      <Photogrid />
      <Photogrid />
      <Photogrid />
      </div>
    </div>
    </>
  );
} 

export default App;
