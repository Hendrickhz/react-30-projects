import React, { useState } from "react";
import Button from "../../components/Button";
import { FaAddressBook, FaArrowsAltV } from "react-icons/fa";
const SearchFilter = ({search,setSearch, toggleSortAZ,toggleShowContacts}) => {
 
  return (
    <section className=" text-center flex mx-auto justify-center gap-3">
      <Button text={"Contacts"} icon={<FaAddressBook />} onClick={toggleShowContacts}/>
      <input
        type="text"
        name=""
        placeholder="Search By First Name"
        className="px-3 text-gray-700 rounded"
        onChange={(e)=>setSearch(e.target.value)}
        id=""
      />
      <Button onClick={toggleSortAZ} text={"Sort"} icon={<FaArrowsAltV />} />
    </section>
  );
};

export default SearchFilter;
