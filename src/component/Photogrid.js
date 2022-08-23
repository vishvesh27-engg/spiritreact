import './Photogrid.css'
import Card from './Card';
function Photogrid({heading}) {

  return (

   
    <>
    <h3 style={{ paddingLeft:"3%",width: "116px",height: "67px",fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: "500",fontSize:"36px"}}>Heads</h3>
    <div className='flex-container'>
        <div><Card img="test.jpg" name="default" designation="CTO"></Card></div>
        <div><Card img="test.jpg" name="default" designation="CTO"></Card></div>
        <div><Card img="test.jpg" name="default" designation="CTO"></Card></div>
        <div><Card img="test.jpg" name="default" designation="CTO"></Card></div>
        <div><Card img="test.jpg" name="default" designation="CTO"></Card></div>
        <div><Card img="test.jpg" name="default" designation="CTO"></Card></div>
        <div><Card img="test.jpg" name="default" designation="CTO"></Card></div>
       </div>
    </>
  );
}

export default Photogrid;