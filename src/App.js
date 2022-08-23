import './App.css';
import Gallery from './component/Gallery';
import Home from './component/Home';
import Photogrid from './component/Photogrid';
function App() {
  return (
    <>
    <Home />
    <div style={{backgroundImage:`url('Vector49.svg')`}}>
      <h1 style={{width: "365px",
height: "67px",
paddingLeft: "3%",
fontFamily: 'Poppins',
fontStyle: "normal",
fontWeight: "600",
fontSize: "30px",
lineHeight: "67px",
/* identical to box height, or 139% */


color: "#11002C"}}>Meet the Team</h1>
      <div style={{paddingLeft: "30px"}}>
      <Photogrid />
      <Photogrid />
      <Photogrid />
      </div>
    </div>
    <Gallery />
    </>
  );
} 

export default App;
