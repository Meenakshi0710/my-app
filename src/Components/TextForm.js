import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick = () =>{
        
        let newText = "";
        setText(newText);
        props.showAlert("Cleared","success");
    }
    const handleCapitalClick = () =>{

        
       
        }
      
       
    

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text,setText] = useState("");
    return (

        <>
        <div className = "container my-4 " style = {{color : props.mode === "light" ? "black" : "white"}}>
        <h3>{props.heading}</h3>
        <form>
            <div className="form-group my-3">
                <textarea className="form-control " id="exampleFormControlTextarea1" value = {text} onChange = {handleOnChange} rows="8" style = {{backgroundColor : props.mode === "dark" ? "grey" : "white", color : props.mode === "light" ? "black" : "white" }}></textarea>
            </div>
        </form>
        <button className = "btn btn-primary mx-2" onClick = {handleUpClick}>Convert to uppercase</button>
        <button className = "btn btn-primary mx-2" onClick = {handleLoClick}>Convert to lowercase</button>
        <button className = "btn btn-primary mx-2" onClick = {handleClearClick}>Clear text</button>
        <button className = "btn btn-primary mx-2" onClick = {handleCapitalClick}>Capitalized case</button>
        </div>

        <div className = "container my-3" style = {{color : props.mode === "light" ? "black" : "white"}}>
            <h4>Your text summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length} read time</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text : "Enter your text above to preview"}</p>

        </div>

        </>
    );
}

