import React, { useEffect, useState } from "react";
import { DeleteIcon, Icons, NoteStyle } from "./NoteStyle";
import { BiTrashAlt, BiPencil } from "react-icons/bi";
const NoteCard = ({ note, deleteNote ,bg}) => {
    const [newCardBg,setNewCardBg]= useState();

    useEffect(()=>{
        !newCardBg && setNewCardBg(bg); 
    },[])
  return (
    <NoteStyle className={`overflow-hidden ${newCardBg} rounded-md shadow-sm border min-w-[200px]`}>
      <div
        className="
         px-4 pt-3  text-white"
      >
        <Icons>
          <BiPencil />
          <DeleteIcon>
            <BiTrashAlt onClick={()=>deleteNote(note.id)} />
          </DeleteIcon>
        </Icons>
       
      </div>
      <div className="px-4 py-2">
        <textarea
          name=""
          style={{ border: "none", outline: "none" }}
        ></textarea>
      </div>
    </NoteStyle>
  );
};

export default NoteCard;
