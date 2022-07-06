import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() { // Now this is a component

	const [mode, setMode] = useState('light');

	const toggleMode = ()=>{
		if(mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#042743'
		}
		else {
			setMode('light');
			document.body.style.backgroundColor = 'white'
		}
	}

	return (
		<Router>
			<Navbar mode={mode} toggleMode={toggleMode} />
			<div className="container my-5">
				<Routes>
					<Route exact path="/" element={<TextForm mode={mode} />} />
					<Route exact path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;