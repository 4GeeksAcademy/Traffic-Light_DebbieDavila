import React from "react";
import { useState, useEffect } from "react";


//create your first component
const Home = (props) => {
	const [color, setColor] = useState("red");

	useEffect(() => {
		const interval = setInterval(() => {
		  // Toggle between red, yellow, and green colors-I started on red ie: real traffic light
		  switch (color) {
			case "red":
			  setColor("yellow");
			  break;
			case "yellow":
			  setColor("green");
			  break;
			case "green":
			  setColor("red");
			  break;
			default:
			  setColor("red");
		  }
		}, 950); // Change the interval time as needed it was 1000(in milliseconds)
	
		return () => clearInterval(interval); // Cleanup interval on component unmount
	  }, [color]); // Run effect whenever the color changes

	return (
<div className="container" >
		<div className="traffic box"> 
		<div className={ color=="red"? "top light glow": "top light"} style={{background: "red"}} onClick={()=>setColor ("red")}></div>
		<div className={color=="yellow"? "top light glow": "middle light"} style={{background: "yellow"}} onClick={()=>setColor ("yellow")}></div>
		<div className={color=="green"? "top light glow": "bottom light"} style={{background: "green"}} onClick={()=>setColor ("green")}></div>
		</div>
		Made with ❤️ by
<a href="https://debbiedavila.com/">Deborina Dávila</a>
	</div>

	
);
};
		
export default Home;
		

		


	





