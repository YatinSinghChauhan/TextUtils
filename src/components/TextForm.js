import React, { useState } from 'react'


export default function TextForm(props) {

    const handleOnChange = (event) => {
        console.log("Onchange IS CLICKED !!!!!")
        setText(event.target.value);  //This allows you to change in text area
    }


    // UPPERCASE Button Function
    const handleUpClick = () => {

        let newText = text.toUpperCase()
        setText(newText)
    }

    // LowerCase Button Function
    const handleDownClick = () => {

        let newText = text.toLowerCase()
        setText(newText)
    }

    //  Clear Text Function
    const handleClearClick = () => {
   
         let newText = ''
         setText(newText)
    }


    // Copy to Clipboard Function
    const handleCopyClick = () => {

       let  newText = document.getElementById('myBox');

       newText.select();    // Select the text area

       navigator.clipboard.writeText(newText.value);    // syntax to copy selected text

    //    alert( newText.value);
        props.showAlert("Copied to Clipboard", "success")
    }


    


    const [text, setText] = useState('');   // Set State Variable
    // setText("New text here !"); //Change the state

    return (
        <>
            

            

                <div className="container" style = {{color: props.mode === 'dark'?'white':'black'}}>
                    <h3>{props.heading} </h3>


                    <div className="mx-10 my10" >

                        <textarea className="form-control"  id="myBox" style = {{backgroundColor: props.mode === 'dark'?'#212529':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8" border="5px solid black"></textarea> 
                        
                         {/* Value(placeholder type0) is set to the default state variable i.e text  which can be updated by setText */}
                    </div>

                    <button className="btn btn-primary mx-1" onClick={handleUpClick}> UpperCase </button>
                    <button className="btn btn-success mx-1 my-2" onClick={handleDownClick}> LowerCase </button>
                    <button className="btn btn-warning my-2 mx-1" onClick={handleClearClick}>Clear Text </button>
                   
                
                </div>

                <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'black'}}>
                    
                    <i>  <p>{text.split(" ").length} words | {text.length} characters  | {0.008 * text.split(" ").length} Minute Read  </p>  </i>
                    
                    <h2>Your Text Summary</h2>
                    
                    <button className="btn btn-secondary my-2 mx-1"   onClick={handleCopyClick}> Copy to Clipboard </button>
                    
                    <p >{text.length>0 ? text:"Enter Text To Preview "}</p>

                

                    
                
                </div>
            
        </>
    )
}
