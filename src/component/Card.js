function Card(props) {

    return (
        <>
        
            <img src={props.img} style={{width : "100px"}}>
            </img>
            <div style={{width:"100px"}}>
            <h4 style={{paddingLeft:"20px", paddingBottom:"0px",margin:"0px"}}>{props.name}</h4>
            <p style={{margin:"0px",paddingLeft:"30px"}}>{props.designation}</p>
            </div>
        </>
    );
};
export default Card;