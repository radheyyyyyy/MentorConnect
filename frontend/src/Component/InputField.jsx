import {useState} from "react";

export default function InputField({labelName,placeholder,type,change}){
    let [pass,set]=useState("");

    return(
        <>
        <label className='font-semibold pb-1 font-montserrat'>{labelName}</label>
            <input className='rounded-md w-full focus:border-blue-800 border-2 p-1 font-montserrat placeholder:font-montserrat' type={type} placeholder={placeholder} onChange={change}/>
        </>
    )
}