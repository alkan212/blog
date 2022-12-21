import React, { useEffect } from "react";

String.prototype.format = function() {
  let a = this;
  let k = "";
  for (k in arguments) {
  a = a.replace("{" + k + "}", arguments[k])
  }
  return a
}



export function Img({text, src, href , ...props}) {

  const b = (e)=>{
    console.log(e.currentTarget.querySelector("a.imgLien").click());
  } 

  const test = (e) => {

    console.log("sa marche ")
  }

  let st = {
    height:"100%"
  }

  let stLien = {
    height:"20%"
  }

  let imageStyle = {

  }



  
  return (
    <div className="group relative w-full cursor-pointer w-full flex flex-col items-center justify-end" onClick={b}>

      <div className="m-0 p-0 h-full shrink-0 flex justify-center items-end grow-0" style={st}>
        <img alt={text} className="p-0 m-0 object-contain grow-0" style={imageStyle} src={src} onChange={test} />
      </div>
    
      <div className="m-0 p-0 w-full h-full  flex justify-center items-center mt-3 relative px-6 py-7 bg-zinc-800 group-hover:bg-zinc-900 rounded-md" >
        <a target={"_blank"} rel="noopener noreferrer" className="imgLien absolute w-full p-0 text-white no-underline text-center flex justify-center items-center text-base" href={href}>{text}</a>
      </div>
    </div>
  )
}