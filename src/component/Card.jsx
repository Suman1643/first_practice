import React,{useState,useEffect} from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Card() {
  const [val,setVal] = useState(false);
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-300'>
      <div className='w-96 h-60 relative bg-white rounded-lg flex overflow-hidden'>
        <img className={`shrink-0 w-full transition-transform duration-700 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} h-full object-cover`} src="https://i.pinimg.com/736x/11/e4/60/11e460c8743ea45d6e7935486107650d.jpg" alt="" />
        <img className={`shrink-0 w-full transition-transform duration-700 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} h-full object-cover`} src="https://i.pinimg.com/736x/06/94/01/0694017b785be10d74dfe39e99708bd7.jpg" alt="" />
        <span onClick={()=>setVal(()=>!val)} className='bg-[#dadadaaf] absolute flex items-center justify-center w-10 h-10 bottom-[5%] rounded-full left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <FaLongArrowAltRight size={".9em"}/>
        </span>
      </div>
    </div>
  )
}

export default Card
