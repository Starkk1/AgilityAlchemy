//This File has The input fields components so we can reuse them anywhere else
import React from "react";


export default function InputField({type,name}){
    return(
        <>
        <input type={type} id="input" name={name} required minlength="4" multiple />
          <label for={name} className="label">{name}</label>
      </>
    )
}

