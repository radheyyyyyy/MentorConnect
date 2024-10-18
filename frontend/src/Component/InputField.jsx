import {useState} from "react";

export default function InputField({labelName,placeholder,type,change}){
    let [pass,set]=useState("");

    return(
        <>
        <label className='font-semibold '>{labelName}</label>
            <input className='rounded-md mt-1 mb-2 w-full focus:border-blue-800 border-2 p-1 font-montserrat  placeholder:font-montserrat' type={type} placeholder={placeholder} onChange={change}/>
        </>
    )
}