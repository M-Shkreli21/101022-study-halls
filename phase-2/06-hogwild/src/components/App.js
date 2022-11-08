import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import DisplayedHogs from "./DisplayedHogs"

// import hogs from "../porkers_data";

function App() {

	const [hogsArray, setHogsArray] = useState([])

	useEffect(() => {
		fetch("http://localhost:3001/hogs")
			.then( res => res.json() )
			.then( data => setHogsArray(data) )
	}, [])


	return (
		<div className="App">
			<Nav />
			<DisplayedHogs hogsArray={hogsArray} />
		</div>
	);
}

export default App;
