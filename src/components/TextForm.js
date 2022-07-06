import React, { useState } from 'react'

export default function TextForm(props) {

	const [text, setText] = useState("Dummy Text") // text is initialised with " "
	//setText is the function that will reflect changes in our UI

	const toUpperCase = ()=>{
		let newText = text.toUpperCase();
		setText(newText);
	}
	const toLowerCase = ()=>{
		let newText = text.toLowerCase();
		setText(newText);
	}
	const clearTextArea = ()=>{
		setText("");
	}
	const copyClipboard = ()=>{
		navigator.clipboard.writeText(text);
		alert("Copied: " + text);
	}

	const handleOnChange = (event)=>{
		setText(event.target.value);
	}

	return (
		<>
			<div className="container mb-2" style={{color: props.mode==='dark'?'white':'black'}}>
				<h1>Enter Text Below</h1>
				<div className="mb-3">
					<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
				</div>
				<button className="btn btn-primary mx-1" onClick={toUpperCase}>Convert to Upper Case</button>
				<button className="btn btn-primary mx-1" onClick={toLowerCase}>Convert to Lower Case</button>
				<button className="btn btn-primary mx-1" onClick={clearTextArea}>Clear Text</button>
				<button className="btn btn-primary mx-1" onClick={copyClipboard}>Copy To Clipboard</button>
			</div>
			<div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
				<h2>Summary:</h2>
				<p>{text.localeCompare("")===0?0:text.trim().split(/\s+/).length} words, {text.length} characters</p>
				<h2>Preview:</h2>
				<p>{text}</p>
			</div>
		</>
	)
}