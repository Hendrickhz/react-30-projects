import React from 'react'
import { MdOutlineClose} from 'react-icons/md'
import Button from './Button'
const PopUp = ({title, text, type ="warning", onClick , trigger}) => {
    let popupContainerStyle={
        height:"100vh",
        width:"100vw",
        background: "rgba(0,0,0,0.1)",
        zIndex:1,
        position:"absolute",
        top:0,
        left:0

    }
    let popupStyle={
        position:"relative",
        margin:"40vh auto",
        maxWidth:"500px"

    }
    let typeStyle="blue";
    if(type== "info"){
        typeStyle= "blue"
    }
    else if(type== "danger"){
        typeStyle= "red"
    }
   else if(type== "warning"){
        typeStyle= "orange"
    }
    else if(type== "success"){
        typeStyle= "green"
    }
  return ( trigger &&
    <div style={popupContainerStyle} >
      <div className=" " style={popupStyle} >
        <div className={`  select-none flex justify-between items-center px-4 py-3 rounded-lg
        bg-${typeStyle}-400 text-white  `}>

        <div className="flex px-4 flex-col">
        <h3 className=' text-xl font-semibold mb-3'>{title ?? "Title ..."}</h3>
            <p>{text ?? "text"}</p>
        </div>
        <Button  icon={<MdOutlineClose/>} classes={`bg-${typeStyle}-400 text-white text-xl gap-0  `} onClick={onClick}/>
        </div>
      </div>
    </div>
  )
}

export default PopUp
