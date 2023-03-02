import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function Text(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Hello umar");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handledoClick = () => {
    console.log("Hello umar");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("Hello umar");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("umar");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  //  const handleExtraSpace=()=>{
  //   let newText=text.split(/[]/+1);
  //   setText(newText.join(" "))
  //  }

  return (
    <>
      <div className="container" >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            onChange={handleOnChange}
            rows="3"
            style={{
              backgroundColor: props.mode === "white" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Upper case
        </button>
        <button className="btn btn-primary mx-3" onClick={handledoClick}>
          Lower case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear all
        </button>
        <button className="btn btn-success my-4" onClick={handleCopy}>
          copy
        </button>
      </div>

      <div className="container">
        <h1>summary of text</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} time required to read</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter something in box to preview"}</p>
      </div>
    </>
  );
}
