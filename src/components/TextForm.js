import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handelDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("File Downloaded","success")
    };
    const onChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="8" placeholder='Enter Text here'></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary" onClick={handelDownload}>Download</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p><b>{text.split(" ").length}</b> Words and  <b>{text.length}</b> Characters</p>
                <p>Readable in <b>{Math.trunc(0.008 * (text.split(" ").length - 1))}</b> Minutes <b>{(0.008 * (text.split(" ").length - 1)) * 60}</b> seconds</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
