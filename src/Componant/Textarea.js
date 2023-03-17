import React, { useState } from 'react';






export default function Textarea(props) {
      const [text, setText] = useState('Enter Text here');

      const handell =()=>{
        console.log("sumbit");
        let newtext = text.toUpperCase();
        setText(newtext);

      }

      const handel = (event)=>{
        console.log("On change");
        setText(event.target.value);

      }
  return (
  
<div className="mb-3 my-4  ">
    <h1>{ props.heading}</h1>
  <textarea className="form-control col-md  "    value={text} onChange={handel} id="exampleFormControlTextarea1" rows="8"></textarea>
  
  <button type="button"  onClick={handell}  className="btn btn-primary my-4 "> ConvetToUpper </button>

</div>
  
  )
}
