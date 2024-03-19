import React, { useState } from 'react'
export default function TextForm(props) {
    const [text,setText]=useState("");
    // const [mxw,setmxw]=useState("");
    let handlecap=()=>{
        setText(text.split(/\s+/).map(i=>i.length>0?((i[0].toUpperCase()+i.substr(1))):i).join(" "));
    }
    let handleup=()=>{
        setText(text.toUpperCase());
    }
    let handlelo=()=>{
        setText(text.toLowerCase());
    }
    let handlesen=()=>{
        setText(text.toLowerCase().split('.').map(i=>i.length>0?(i[0].toUpperCase()+i.substr(1)):i).join('.'));
    }
    let handlech=(event)=>{
        setText(event.target.value);
    }
    let cle=()=>{
        setText("");
    }
    let maxword=(text1)=>{

        let words = text1.replace(/[.]/g," ").toLowerCase().split(' ').filter(w=>w.length>0?w:null);
        console.log(words)
        // let obj={};
        let maxl=0;
        var maxw=""
        words.forEach(word => {
            // word=word.replace(".","")
            let val=words.filter(w=>w===word).length;
            maxw=val>maxl?word:maxw;
            maxl=val>maxl?val:maxl;
            // console.log(maxw)
        });
        console.log([maxw,maxl]);
        return [maxw,words.length>0?(maxl/words.length):0];
    }
    let hcp=()=>{
        navigator.clipboard.writeText(text);
        props.salert("Copied to Clipboard","success")
    }
  return (
    <>
    <div className="mb-3">
    <h2 className='my-3' style={{color:props.mode==="light"?"black":"white"}}>{props.head}</h2>
    <textarea className="form-control" style={{backgroundColor:props.mode==="light"?"#b9c6cb":"#0a1424",color:props.mode==="light"?"#0a1424":"#c7cdd3"}} id="myBox" rows="7" value={text} onChange={handlech}></textarea>
    </div>
    <div className='d-grid gap-2 d-md-block'>
    <div class="btn-group" role="group">
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleup} >{props.bt1}</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelo}>{props.bt2}</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecap}>{props.bt3}</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlesen}>Convert to SentenceCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={cle}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={hcp}>Copy to Clipboard</button>
    </div>
    </div>

    <div className="charact">
        <p className='my-3' style={{color:props.mode==="light"?"black":"white"}}>No. of words: {text.split(/\s+/).filter(i=>{return i.length>0}).length}</p>
        <p style={{color:props.mode==="light"?"black":"white"}}>No. of characters: {text.length}</p>
        <p style={{color:props.mode==="light"?"black":"white"}}>No. of characters without spaces: {text.replace(/\s/g,"").length}</p>
        <p style={{color:props.mode==="light"?"black":"white"}}>No. of Sentences: {text.split(".").filter(w=>w.length>0?w:null).length}</p>
        <p style={{color:props.mode==="light"?"black":"white"}}>Most occured Word: {maxword(text)[0]}  ({(maxword(text)[1]*100).toPrecision(4)}%)</p>
    </div>

    </>
  )
}
