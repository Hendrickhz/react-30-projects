import React from 'react'

const Slider = ({sliderValue, handleValueChange}) => {
  return (
    <div>
          <input type="range" name="" className=' h-6 bg-slate-500 appearance-none p-4 w-screen my-5  mx-auto ' min={0} max={100} value={sliderValue} id="" onInput={handleValueChange}  />
    </div>
  )
}

export default Slider

