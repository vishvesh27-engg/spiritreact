import "./Gallery.css";
function Gallery() {

    return (
      <>
      <div className="backgroundpad" >
        <h3>A look from the past</h3>
         <img className="topleft" src="topleft.svg"></img>
        <img className="topright" src="topright.svg"></img>
        <img className="center" src="center.svg"></img>
        <img className="centerright" src="centerright.svg"></img>
        {/* <img className="bottomright" src="bottomright.svg"></img>  */}
      </div>
      </>
    );
  }
  
  export default Gallery;