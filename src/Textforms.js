import { useState } from "react";


export default function Textforms(props) {
    const afinn = {
        good: 3,
        excellent: 3,
        bad: -3,
        poor: -2,
        happy: 3,
        sad: -3,
        // ... add more words and scores
      };
    

    const handleUpClick=()=>{
        console.log("ALL CAPS is clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const halndeOnChange=(event)=>{
        console.log("Handle oN change");
        setText(event.target.value)
    }
    
    const handleDownClick=()=>{
        console.log("all small is clicked")
        let  newText=text.toLowerCase();
        setText(newText)
    }

    const speak = () => {
        // let msg = new SpeechSynthesisUtterance();
        // msg.text = text;
        // window.speechSynthesis.speak(msg);
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
      }

    const sentiment=()=>{
        const words = text.toLowerCase().split(/\s+/);
        let sentimentScore = 0;
      
        words.forEach(word => {
          if (afinn.hasOwnProperty(word)) {
            sentimentScore += afinn[word];
          }
        });
      
        if (sentimentScore > 0) {
          return "Positive";
        } else if (sentimentScore < 0) {
          return "Negative";
        } else {
          return "Neutral";
        }
    }


    const speaksentiment=(sentiment)=>{
        const utterance = new SpeechSynthesisUtterance(`The sentiment is ${sentiment}`);
        speechSynthesis.speak(utterance);
    }

    const [text, setText] = useState("");

  return (
    <div>
      <>
      <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
    <div>
<div className="mb-3 my-3">
  <textarea className="form-control" id="textbox" value={text} onChange={halndeOnChange} style={{backgroundColor:props.mode==='dark'?'#0c0935':'white',color:props.mode==='dark'?'white':'black'}} rows="5"></textarea>
  <br/>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick} >ALL CAPS</button>
  <button type="button" className="btn btn-primary" onClick={handleDownClick} >all small</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>



</div>
    </div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Properties of text</h1>
        <p>There are {text.split(" ").length} words and {text.length} characters in your text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
    </div>
  )
}
