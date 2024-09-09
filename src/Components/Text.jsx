import React, { useState } from 'react'
import "./Text.css"

function Text() {
    const [name,setname]=useState("");
    const [len,setlen]=useState(0);
    const [status,setStatus]=useState(false);
    const [wpm,setWpm]=useState((len*1)/5);
    function handleLower(e) {
        setname(name.toLowerCase());
    }
    const handleTitle=()=>{
        setname( name.split(' ').map(word => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()).join(' '));
    }
   
    const handleClear = (e) => {
        e.target.value="";
        setname("");
        setlen(0);
        setWpm(0);
        setStatus(true);

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(name)
            .then(() => alert('Text copied to clipboard!'))
            .catch(err => alert('Failed to copy text: ', err));
    }
  return (
    <>
      <div className="box">

        <textarea 
        value={name}
        onChange={(e)=>{
            const newText = e.target.value;
            setname(newText);
            setname(e.target.value)
            setlen(e.target.value.length)
            setWpm((len*1)/5);
            if(status==true){
                e.target.value="";
                setname("");
                setlen(0);
                setStatus(false);

            }
            
            
        } }  type="text" placeholder='type here'/>
        </div>
        <div className="buttons">
            <button onClick={()=>
            {
                setname(name.toUpperCase());
                
            }

            }> convert to uppercase

            </button>
            <button onClick={handleLower}>convert to lower</button>
            <button onClick={handleTitle}>convert to Title</button>
            <button onClick={handleCopy}>convert to Copy</button>
            <button onClick={
               handleClear
               

            }>click to Clear</button>
        </div>
        <div className="show">
            {name}
        </div>
        <div className="len">
            {len}
        </div>
        <div className="wordspersecond">
            {wpm} WPM
        </div>
        
      
    </>
  )
}

export default Text
