import React, { useState } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { BiPlus } from "react-icons/bi";
import NoteCard from "./NoteCard";
import { v4 as uuidv4 } from "uuid";
const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = uuidv4()));
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id != id));
  };
  const cards = ["bg-green-500", "bg-red-500", "bg-blue-500", "bg-yellow-500","bg-slate-500"];
  const randomBg = () => {
    const random = Math.floor(Math.random() * cards.length);
    return cards[random];
  };

  return (
    <div className="  mt-5 mx-auto">
      <div className=" flex justify-center gap-5  mt-4">
        <Title text={"Note App"} />
        <Button text={"ADD"} icon={<BiPlus />} onClick={addNewNote} />
      </div>
      <div className="flex gap-4 flex-wrap">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} deleteNote={deleteNote} bg={randomBg} />
        ))}
      </div>
    </div>
  );
};

export default NoteApp;
