import './Photogrid.css'
import Card from './Card';
function Photogrid({heading}) {

  return (

   
    <>
    <h3>Heads</h3>
    <div className='flex-container' style={{paddingRight:"100px"}}>
        <div><Card img="test.jpg" name="default" designation="CTO"></Card></div>
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