import React from 'react'
import './LockSlider.css'
const LockSlider = ({handleInput, sliderValue,width}) => {
    let sliderStyle={
        appearance:"none",
        width: width??"300px",
        height:"60px",
        background:"rgba(188,190,188,0.5)",
        outline:"none",
        borderRadius:"25px",
        padding:"0 20px",
        cursor:"pointer"
    }
  return (
  
      <input type="range" name="" className='slider my-5  mx-auto border-4' step={10} id="" style={sliderStyle} value={sliderValue}  onInput={handleInput} />

  )
}

export default LockSlider
