import React, { useState } from 'react'
import Button from '../../components/Button'

const TemperatureController = () => {
    const [temperature,setTemperature]=useState(0)
    const decreaseTemperature=()=>{
        setTemperature(temperature-1)
    }
    const increaseTemperature=()=>{
        setTemperature(temperature+1)
    }
    return (
    <div>
      <div className="m-5  bg-gray-100 p-5  inline-block">
        <p className={`w-[220px] h-[220px] text-white font-bold  flex items-center justify-center  rounded-full p-5 border border-gray-400 ${temperature > 0  ?' bg-red-600':'bg-blue-400'}`}><span>{temperature} * C</span></p> 
        <div className="flex justify-between items-center">
            <Button onClick={increaseTemperature} text={"+"}/>
            <Button onClick={decreaseTemperature} text={"-"}/>
        </div>
        </div>
    </div>
  )
}

export default TemperatureController
