import React from "react";
import { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("yellow");
	return (
<div className="container" >
		<div className="traffic box"> 
		<div className={ color=="red"? "top light glow": "top light"} style={{background: "red"}} onClick={()=>setColor ("red")}></div>
		<div className={color=="yellow"? "top light glow": "middle light"} style={{background: "yellow"}} onClick={()=>setColor ("yellow")}></div>
		<div className={color=="green"? "top light glow": "bottom light"} style={{background: "green"}} onClick={()=>setColor ("green")}></div>
		</div>
	</div>
);
};
		
export default Home;
		

		


	





