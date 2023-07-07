import React, { useState } from 'react'
import Title from '../../components/Title'

const ESignature = () => {
  const [name,setName]= useState("Your Signature");
  const [date,setDate]= useState("");
  const nameHandler=(e)=>{
    setName(e.target.value)
  }
  const dateHandler=(e)=>{
    setDate(e.target.value)
  }
 
  return (
    <div className=' bg-gray-1j00 h-screen w-full'>
      <div className="pt-20 ">
      <Title text={name} classes={'mb-6 text-4xl font-bold text-center'}/>
        <Title text={date ? date : "DOB"}/>
        <p className=' mt-4 text-justify text-gray-500 '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cumque adipisci exercitationem nemo fuga blanditiis facilis sint saepe nisi magnam pariatur tempore optio animi voluptatibus consequatur unde labore laudantium, obcaecati ipsam iste qui, quae mollitia ad? Quam in nam provident nostrum aliquid libero, tenetur, magnam amet at suscipit ab. Obcaecati!
        </p>
      </div>

    <footer className=' justify-evenly flex h-[60vh] items-end'>
    <input type="text" name="" id="" onChange={nameHandler}   style={{border:"none",borderBottom:"1px dotted black"}} placeholder=' Enter Name'/>
      <input type="date" name="" id="" onChange={dateHandler}   style={{border:"none",borderBottom:"1px dotted black"}}/>
     
    </footer>
    </div>
  )
}

export default ESignature
